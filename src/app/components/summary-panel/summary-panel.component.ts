import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Calculation {
  appliance: string;
  power: number;
  hoursPerDay: number;
  daysPerMonth: number;
  consumptionKWh: number;
  cost: number;
}

@Component({
  selector: 'app-summary-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-panel.component.html',
  styleUrls: ['./summary-panel.component.css']
})
export class SummaryPanelComponent {
  @Input() totalConsumption: number = 0;
  @Input() appliancesCount: number = 0;
  @Input() totalCost: number = 0;

  getConsumptionComparison(): string {
    if (this.totalConsumption > 250) return 'Alto consumo ⚠️';
    if (this.totalConsumption > 150) return 'Médio consumo ⚡';
    return 'Baixo consumo 🌱';
  }
}