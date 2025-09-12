import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-atividade-aparelhos',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './atividade-aparelhos.component.html',
  styleUrl: './atividade-aparelhos.component.css'
})
export class AtividadeAparelhosComponent {
  devices = [
    { name: 'TV', on: true, imgOn: '/images/tv.png', imgOff: 'assets/tv_off.png' },
    { name: 'Computador', on: true, imgOn: '/images/computador.png', imgOff: 'assets/pc_off.png' },
    { name: 'Micro-ondas', on: true, imgOn: '/images/microondas.png', imgOff: 'assets/microwave_off.png' },
    { name: 'Carregador', on: true, imgOn: '/images/carregador.png', imgOff: 'assets/charger_off.png' }
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
