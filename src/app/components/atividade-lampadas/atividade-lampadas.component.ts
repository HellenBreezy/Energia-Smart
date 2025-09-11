import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-atividade-lampadas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './atividade-lampadas.component.html',
  styleUrl: './atividade-lampadas.component.css'
})
export class AtividadeLampadasComponent {
   lamps = Array(5).fill({ on: true }).map(l => ({ ...l }));
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
