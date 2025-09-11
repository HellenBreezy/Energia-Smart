import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade-aparelhos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atividade-aparelhos.component.html',
  styleUrl: './atividade-aparelhos.component.css'
})
export class AtividadeAparelhosComponent {
  devices = [
    { name: 'TV', on: true, imgOn: 'assets/tv_on.png', imgOff: 'assets/tv_off.png' },
    { name: 'Computador', on: true, imgOn: 'assets/pc_on.png', imgOff: 'assets/pc_off.png' },
    { name: 'Micro-ondas', on: true, imgOn: 'assets/microwave_on.png', imgOff: 'assets/microwave_off.png' },
    { name: 'Carregador', on: true, imgOn: 'assets/charger_on.png', imgOff: 'assets/charger_off.png' }
  ];

  tips = [
    "Desligue os aparelhos que não estão em uso.",
    "Aproveite o modo economia de energia quando disponível.",
    "Não deixe carregadores conectados sem uso.",
    "Use régua de energia para facilitar o desligamento de vários aparelhos."
  ];

  currentTip = '';

  toggleDevice(index: number) {
    if (this.devices[index].on) {
      this.devices[index].on = false;
      this.currentTip = this.tips[Math.floor(Math.random() * this.tips.length)];
    }
  }

  resetDevices() {
    this.devices.forEach(device => device.on = true);
    this.currentTip = '';
  }
}
