import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../services/energy.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  totalConsumption: number = 0;
  ecoScore: number = 1000;
  history: any[] = [];

  constructor(private energyService: EnergyService) {}

  ngOnInit() {
    this.energyService.totalConsumption$.subscribe(consumption => {
      this.totalConsumption = consumption;
    });

    this.energyService.ecoScore$.subscribe(score => {
      this.ecoScore = score;
    });

    this.history = this.energyService.getHistory();
  }

  getScoreColor(): string {
    if (this.ecoScore >= 800) return '#4caf50';
    if (this.ecoScore >= 600) return '#ffc107';
    if (this.ecoScore >= 400) return '#ff9800';
    return '#f44336';
  }

  clearHistory() {
    this.energyService.clearHistory();
    this.history = [];
  }
}
