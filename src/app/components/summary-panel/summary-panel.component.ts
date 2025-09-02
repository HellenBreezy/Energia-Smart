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
  @Input() ecoScore: number = 1000;
  @Input() appliancesCount: number = 0;

  getScoreColor(): string {
    if (this.ecoScore >= 800) return '#4caf50';
    if (this.ecoScore >= 600) return '#ffc107';
    if (this.ecoScore >= 400) return '#ff9800';
    return '#f44336';
  }

  getScoreMessage(): string {
    if (this.ecoScore >= 800) return 'Excelente!';
    if (this.ecoScore >= 600) return 'Muito bom!';
    if (this.ecoScore >= 400) return 'Bom!';
    return 'Pode melhorar';
  }

  getScoreIcon(): string {
    if (this.ecoScore >= 800) return '🌿';
    if (this.ecoScore >= 600) return '👍';
    if (this.ecoScore >= 400) return '💪';
    return '📈';
  }

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