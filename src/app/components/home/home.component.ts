import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseSceneComponent, Appliance } from '../house-scene/house-scene.component';
import { ModalComponent } from '../modal/modal.component';
import { SummaryPanelComponent } from '../summary-panel/summary-panel.component';
import { EnergyService } from '../../services/energy.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseSceneComponent, ModalComponent, SummaryPanelComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userName: string = 'Hellen';
  totalConsumption: number = 0;
  ecoScore: number = 1000;
  appliancesCount: number = 8;
  
  selectedAppliance: Appliance | null = null;
  modalVisible: boolean = false;
  
  tips = [
    'Desligue os aparelhos da tomada quando não estiver usando.',
    'Use lâmpadas LED que consomem até 80% menos energia.',
    'Mantenha a temperatura do ar-condicionado em 23°C.',
    'Acumule roupas para usar a máquina de lavar com carga completa.',
    'Prefira tomar banhos mais curtos para economizar energia.'
  ];
  
  currentTip: string = '';

  constructor(private energyService: EnergyService) { }

  ngOnInit(): void {
    this.energyService.totalConsumption$.subscribe(consumption => {
      this.totalConsumption = consumption;
    });

    this.energyService.ecoScore$.subscribe(score => {
      this.ecoScore = score;
    });

    this.currentTip = this.getRandomTip();
  }

  onApplianceSelected(applianceId: string) {
    const houseScene = new HouseSceneComponent();
    this.selectedAppliance = houseScene.appliances.find(a => a.id === applianceId) || null;
    this.modalVisible = true;
  }

  onModalVisibleChange(visible: boolean) {
    this.modalVisible = visible;
    if (!visible) {
      this.selectedAppliance = null;
    }
  }

  getRandomTip(): string {
    const randomIndex = Math.floor(Math.random() * this.tips.length);
    return this.tips[randomIndex];
  }

  getScoreColor(): string {
    if (this.ecoScore >= 800) return '#4caf50';
    if (this.ecoScore >= 600) return '#ffc107';
    if (this.ecoScore >= 400) return '#ff9800';
    return '#f44336';
  }

  getScoreMessage(): string {
    if (this.ecoScore >= 800) return 'Excelente! Você é um herói da energia!';
    if (this.ecoScore >= 600) return 'Muito bom! Continue economizando!';
    if (this.ecoScore >= 400) return 'Bom! Você pode melhorar ainda mais.';
    return 'Há espaço para melhorar. Tente economizar mais energia.';
  }

  // Adicione esta função ao HomeComponent
getApplianceRoom(applianceId: string): string {
  const houseScene = new HouseSceneComponent();
  const appliance = houseScene.appliances.find(a => a.id === applianceId);
  return appliance ? appliance.room : 'Cômodo não especificado';
}
}