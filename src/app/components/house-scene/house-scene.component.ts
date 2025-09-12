import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Appliance {
  id: string;
  name: string;
  icon: string;
  power: number;
  selected: boolean; 
  description: string;
  position: {
    top: string;
    left: string;
    background: string;
  };
  room: string;
}

@Component({
  selector: 'app-house-scene',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './house-scene.component.html',
  styleUrls: ['./house-scene.component.css']
})
export class HouseSceneComponent{
  @Input() appliances: Appliance[] = [];
  @Output() applianceSelected = new EventEmitter<string>();

  houseBackgroundImage = '/images/home.png';

  pick(applianceId: string) {
    this.applianceSelected.emit(applianceId);
  }

  getAppliancesByRoom(room: string) {
    return this.appliances.filter(a => a.room === room);
  }
}