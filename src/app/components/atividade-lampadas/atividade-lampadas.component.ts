import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-atividade-lampadas',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './atividade-lampadas.component.html',
  styleUrl: './atividade-lampadas.component.css'
})
export class AtividadeLampadasComponent {

  lamps = [
    {
      name: 'Lâmpada Sala',
      on: false,
      onImage: '/images/lampada.png',
      offImage: '/images/lampada-no-color.png'
    },
    {
      name: 'Lâmpada Quarto',
      on: false,
      onImage: '/images/lampada.png',
      offImage: '/images/lampada-no-color.png'
    },
    {
      name: 'Lâmpada Sala',
      on: false,
      onImage: '/images/lampada.png',
      offImage: '/images/lampada-no-color.png'
    },
    {
      name: 'Lâmpada Quarto',
      on: false,
      onImage: '/images/lampada.png',
      offImage: '/images/lampada-no-color.png'
    },
    {
      name: 'Lâmpada Sala',
      on: false,
      onImage: '/images/lampada.png',
      offImage: '/images/lampada-no-color.png'
    }
  ];

  tips = [
    "Apague a luz ao sair de um cômodo.",
    "Prefira lâmpadas de LED, que consomem menos.",
    "Use luz natural sempre que possível.",
    "Pinte as paredes com cores claras para aproveitar melhor a luz.",
    "Evite deixar lâmpadas acesas durante o dia."
  ];
  currentTip = "";

  toggleLamp(index: number) {
    if (this.lamps[index].on) {
      this.lamps[index].on = false;
      this.currentTip = this.tips[Math.floor(Math.random() * this.tips.length)];
    }
  }

  resetLamps() {
    this.lamps.forEach(l => l.on = true);
    this.currentTip = "";
  }
}
