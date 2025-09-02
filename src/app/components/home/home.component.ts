import { Component, signal } from '@angular/core';
import { ApplianceKey } from '../../services/energy.service';
import { CommonModule } from '@angular/common';
import { HouseSceneComponent } from '../house-scene/house-scene.component';
import { SummaryPanelComponent } from '../summary-panel/summary-panel.component';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseSceneComponent, ModalComponent, SummaryPanelComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
   selectedKey = signal<ApplianceKey | null>(null);

  openModal(key: ApplianceKey) {
    this.selectedKey.set(key);
  }
}
