import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseSceneComponent, Appliance } from '../house-scene/house-scene.component';
import { ModalComponent } from '../modal/modal.component';
import { SummaryPanelComponent } from '../summary-panel/summary-panel.component';
import { EnergyService } from '../../services/energy.service';
import { ModalApplianceSelectorComponent } from '../modal-appliance-selector/modal-appliance-selector.component';
import { ApplianceService } from '../../services/appliance.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseSceneComponent, ModalComponent, SummaryPanelComponent, ModalApplianceSelectorComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = '';
  totalConsumption = 0;
  appliancesCount = 0;
  selectedAppliance: Appliance | null = null;

  availableAppliances: Appliance[] = [];
  displayedAppliances: Appliance[] = [];

  modalVisibleSelector = true;
  modalVisibleDetail = false;

  tips = [
    'Desligue os aparelhos da tomada quando não estiver usando.',
    'Use lâmpadas LED que consomem até 80% menos energia.',
    'Mantenha a temperatura do ar-condicionado em 23°C.',
    'Acumule roupas para usar a máquina de lavar com carga completa.',
    'Prefira tomar banhos mais curtos para economizar energia.'
  ];
  currentTip = '';

  constructor(
    private energyService: EnergyService,
    private applianceService: ApplianceService
  ) {}

  ngOnInit() {
    const name = localStorage.getItem('userName');
    this.userName = name ? name : '';
    this.currentTip = this.getRandomTip();
    this.energyService.totalConsumption$.subscribe(cons => this.totalConsumption = cons);

    // Carrega os appliances do service
    this.availableAppliances = this.applianceService.getAppliances().map(a => ({ ...a, selected: true }));
  }

  openApplianceSelector() {
    this.modalVisibleSelector = true;
  }

  onApplianceSelectionConfirmed(selected: Appliance[]) {
    this.displayedAppliances = selected;
    this.appliancesCount = selected.length;
    this.modalVisibleSelector = false;
  }

  onModalVisibleChange(visible: boolean) {
    this.modalVisibleDetail = visible;
    if (!visible) this.selectedAppliance = null;
  }

  onApplianceSelected(applianceId: string) {
    const appliance = this.displayedAppliances.find(a => a.id === applianceId);
    if (appliance) {
      this.selectedAppliance = appliance;
      this.modalVisibleDetail = true;
    }
  }

  getRandomTip(): string {
    const index = Math.floor(Math.random() * this.tips.length);
    return this.tips[index];
  }

  getApplianceRoom(applianceId: string): string {
    const appliance = this.displayedAppliances.find(a => a.id === applianceId);
    return appliance ? appliance.room : 'Cômodo não especificado';
  }
}