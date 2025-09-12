import { Component, Input, Output, EventEmitter } from '@angular/core';
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
export class ModalComponent {
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

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.resetForm();
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

  onCalculateAgain() {
    this.resetForm();
  }

  private resetForm() {
    this.power = this.appliance?.power || 0;
    this.hoursPerDay = 0;
    this.daysPerMonth = 30;
    this.consumption = 0;
    this.cost = 0;
    this.calculated = false;
  }
}