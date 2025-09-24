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
    { name: 'TV', on: true, imgOn: '/images/tv.png', imgOff: 'images/tv-off.png', clicked: false },
    { name: 'Computador', on: true, imgOn: '/images/computador.png', imgOff: 'images/computador-off.png', clicked: false },
    { name: 'Micro-ondas', on: true, imgOn: '/images/microondas.png', imgOff: 'images/microondas-off.png', clicked: false},
    { name: 'Carregador', on: true, imgOn: '/images/carregador.png', imgOff: 'images/carregador-off.png', clicked: false }
  ];

  tips = [
    "Desligue os aparelhos que não estão em uso.",
    "Aproveite o modo economia de energia quando disponível.",
    "Não deixe carregadores conectados sem uso.",
    "Use régua de energia para facilitar o desligamento de vários aparelhos."
  ];

  currentTip = '';

  toggleDevice(index: number) {
    const device = this.devices[index];
    device.clicked = true;
    device.on = false;
    this.currentTip = this.tips[Math.floor(Math.random() * this.tips.length)];

    requestAnimationFrame(() => {
      setTimeout(() => device.clicked = false, 500);
    });
  }

  resetDevices() {
    this.devices.forEach(device => {
      device.on = true;
      device.clicked = false;
    });
    this.currentTip = '';
  }

}
