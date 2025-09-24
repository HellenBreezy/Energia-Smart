import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EnergyService } from '../../services/energy.service';
import { Appliance } from '../house-scene/house-scene.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnChanges{
  @Input() appliance: Appliance | null = null;
  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  power: number = 0;
  hoursPerDay: number = 0;
  daysPerMonth: number = 30;

  consumption: number = 0;
  cost: number = 0;
  calculated: boolean = false;

  constructor(private energyService: EnergyService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appliance'] && this.appliance) {
      this.loadApplianceValues();
    }
  }


  isFormValid(): boolean {
    return !!this.appliance && this.power > 0 && this.hoursPerDay > 0 && this.daysPerMonth > 0;
  }

  onCalculate() {
    if (this.isFormValid()) {
      this.consumption = this.energyService.calculateConsumption(
        this.power, // em W
        this.hoursPerDay,
        this.daysPerMonth
      );

      this.cost = this.energyService.calculateCost(this.consumption);

      this.energyService.addCalculation({
        appliance: this.appliance!.name,
        power: this.power, // armazenamos em W
        hoursPerDay: this.hoursPerDay,
        daysPerMonth: this.daysPerMonth
      });

      this.calculated = true;
    }
  }

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
    // Removido o resetForm() daqui
  }

  onCalculateAgain() {
    // Só limpa os resultados de cálculo, mantendo os valores dos inputs
    this.consumption = 0;
    this.cost = 0;
    this.calculated = false;
  }

  private resetForm() {
    this.power = this.appliance?.power || 0;
    this.hoursPerDay = 0;
    this.daysPerMonth = 30;
    this.consumption = 0;
    this.cost = 0;
    this.calculated = false;
  }

  private loadApplianceValues() {
    const stored = localStorage.getItem('energyCalculations');
    let calculations: any[] = stored ? JSON.parse(stored) : [];

    // Procura se já existe cálculo para este aparelho
    const existing = calculations.find(c => c.appliance === this.appliance!.name);

    if (existing) {
      // Se existir, carrega os valores
      this.power = existing.power;
      this.hoursPerDay = existing.hoursPerDay;
      this.daysPerMonth = existing.daysPerMonth;
      this.consumption = existing.consumptionKWh;
      this.cost = existing.cost;
      this.calculated = true;
    } else {
      // Se não existir, mantém os campos padrão
      this.power = 0;
      this.hoursPerDay = 0;
      this.daysPerMonth = 30;
      this.consumption = 0;
      this.cost = 0;
      this.calculated = false;
    }
  }
  
}