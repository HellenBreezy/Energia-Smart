import { Component, EventEmitter, Output } from '@angular/core';
import { ApplianceKey } from '../../services/energy.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-house-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-scene.component.html',
  styleUrl: './house-scene.component.css'
})
export class HouseSceneComponent {
  @Output() select = new EventEmitter<ApplianceKey>();
  pick(key: ApplianceKey) { this.select.emit(key); }
}
