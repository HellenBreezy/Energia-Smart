import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Appliance } from '../house-scene/house-scene.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-appliance-selector',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-appliance-selector.component.html',
  styleUrl: './modal-appliance-selector.component.css'
})
export class ModalApplianceSelectorComponent {
  @Input() appliances: Appliance[] = [];
  @Output() selectionConfirmed = new EventEmitter<Appliance[]>();
  @Output() close = new EventEmitter<void>();

  confirmSelection() {
    this.selectionConfirmed.emit(this.appliances.filter(a => a.selected));
  }

  closeModal() {
    this.close.emit();
  }
}
