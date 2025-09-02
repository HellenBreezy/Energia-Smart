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
  
  hours: number = 0;
  consumption: number = 0;
  calculated: boolean = false;

  constructor(private energyService: EnergyService) {}

  onClose() {
    this.visible = false;
    this.visibleChange.emit(false);
    this.resetForm();
  }

  onCalculate() {
    if (this.hours > 0 && this.appliance) {
      this.consumption = this.energyService.calculateConsumption(
        this.appliance.power, 
        this.hours
      );
      
      // Salvar o cálculo
      this.energyService.addCalculation({
        appliance: this.appliance.name,
        power: this.appliance.power,
        hours: this.hours,
        consumption: this.consumption
      });
      
      this.calculated = true;
    }
  }

  onCalculateAgain() {
    this.resetForm();
  }

  private resetForm() {
    this.hours = 0;
    this.consumption = 0;
    this.calculated = false;
  }
}