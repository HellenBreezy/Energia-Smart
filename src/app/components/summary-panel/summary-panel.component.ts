import { Component, computed } from '@angular/core';
import { EnergyService } from '../../services/energy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary-panel.component.html',
  styleUrl: './summary-panel.component.css'
})
export class SummaryPanelComponent {
  constructor(public svc: EnergyService) {}
  totals = computed(() => this.svc.totals());
  hasItems() { return this.svc.entries().length > 0; }
  clear() { this.svc.clear(); }
}
