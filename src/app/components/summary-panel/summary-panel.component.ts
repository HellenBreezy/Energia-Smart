import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  getConsumptionComparison(): string {
    const averageConsumption = 5; // kWh/dia
    const comparison = ((this.totalConsumption / averageConsumption) * 100).toFixed(0);
    
    if (this.totalConsumption < averageConsumption) {
      return `${comparison}% abaixo da média`;
    } else {
      return `${comparison}% acima da média`;
    }
  }
}