import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Appliance {
  id: string;
  name: string;
  icon: string;
  power: number;
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
export class HouseSceneComponent {
  @Output() applianceSelected = new EventEmitter<string>();

  // Imagem de fundo com planta baixa representando os cômodos
  houseBackgroundImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"><defs><pattern id="wall" patternUnits="userSpaceOnUse" width="20" height="20"><rect width="20" height="20" fill="%23f0f0f0"/><path d="M20 0L0 20" stroke="%23d0d0d0" stroke-width="1"/></pattern><pattern id="floor" patternUnits="userSpaceOnUse" width="40" height="40"><rect width="40" height="40" fill="%23f8f8f8"/><path d="M40 0L0 40" stroke="%23e0e0e0" stroke-width="1"/></pattern></defs><rect width="800" height="500" fill="%23fafafa"/><g stroke="%23333" stroke-width="3"><!-- Sala de Estar --><rect x="50" y="50" width="300" height="200" fill="url(%23floor)"/><text x="200" y="40" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">Sala de Estar</text><!-- Cozinha --><rect x="450" y="50" width="300" height="200" fill="url(%23floor)"/><text x="600" y="40" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">Cozinha</text><!-- Quarto --><rect x="50" y="300" width="300" height="150" fill="url(%23floor)"/><text x="200" y="290" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">Quarto</text><!-- Banheiro --><rect x="450" y="300" width="150" height="150" fill="url(%23floor)"/><text x="525" y="290" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">Banheiro</text><!-- Lavanderia --><rect x="650" y="300" width="100" height="150" fill="url(%23floor)"/><text x="700" y="290" text-anchor="middle" font-family="Arial" font-size="14" fill="%23333">Lavanderia</text></g><!-- Paredes --><line x1="350" y1="50" x2="350" y2="250" stroke="%23333" stroke-width="3"/><line x1="50" y1="250" x2="350" y2="250" stroke="%23333" stroke-width="3"/><line x1="450" y1="250" x2="750" y2="250" stroke="%23333" stroke-width="3"/><line x1="600" y1="300" x2="600" y2="450" stroke="%23333" stroke-width="3"/><line x1="450" y1="300" x2="750" y2="300" stroke="%23333" stroke-width="3"/></svg>';

  appliances: Appliance[] = [
    {
      id: 'tv',
      name: 'TV',
      icon: '📺',
      power: 0.15,
      description: 'Televisores modernos consomem menos energia no modo de espera.',
      position: {
        top: '25%',
        left: '25%',
        background: 'linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%)'
      },
      room: 'Sala de Estar'
    },
    {
      id: 'fridge',
      name: 'Geladeira',
      icon: '❄️',
      power: 0.2,
      description: 'Geladeiras consomem mais energia quando a porta é aberta frequentemente.',
      position: {
        top: '25%',
        left: '70%',
        background: 'linear-gradient(135deg, #6ce4ff 0%, #42a5f5 100%)'
      },
      room: 'Cozinha'
    },
    {
      id: 'shower',
      name: 'Chuveiro',
      icon: '🚿',
      power: 5.0,
      description: 'Chuveiros elétricos são uns dos maiores consumidores de energia.',
      position: {
        top: '70%',
        left: '60%',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      },
      room: 'Banheiro'
    },
    {
      id: 'washing',
      name: 'Máquina de Lavar',
      icon: '🧺',
      power: 1.0,
      description: 'Use a máquina com carga completa para economizar energia e água.',
      position: {
        top: '70%',
        left: '85%',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      },
      room: 'Lavanderia'
    },
    {
      id: 'lamp',
      name: 'Lâmpada',
      icon: '💡',
      power: 0.01,
      description: 'Lâmpadas LED consomem até 80% menos que as incandescentes.',
      position: {
        top: '70%',
        left: '25%',
        background: 'linear-gradient(135deg, #ffe29f 0%, #ffa99f 100%)'
      },
      room: 'Quarto'
    },
    {
      id: 'ac',
      name: 'Ar-Condicionado',
      icon: '❄️',
      power: 1.5,
      description: 'Manter o ar-condicionado a 23°C economiza energia.',
      position: {
        top: '25%',
        left: '85%',
        background: 'linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)'
      },
      room: 'Sala de Estar'
    },
    {
      id: 'computer',
      name: 'Computador',
      icon: '💻',
      power: 0.1,
      description: 'Configure modo de economia de energia no seu computador.',
      position: {
        top: '70%',
        left: '40%',
        background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
      },
      room: 'Quarto'
    },
    {
      id: 'microwave',
      name: 'Micro-ondas',
      icon: '🍲',
      power: 1.2,
      description: 'Desligue da tomada quando não estiver usando.',
      position: {
        top: '25%',
        left: '55%',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      },
      room: 'Cozinha'
    },
    {
      id: 'blender',
      name: 'Liquidificador',
      icon: '🥤',
      power: 0.3,
      description: 'Use por curtos períodos para economizar energia.',
      position: {
        top: '40%',
        left: '63%',
        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
      },
      room: 'Cozinha'
    },
    {
      id: 'hairdryer',
      name: 'Secador de Cabelo',
      icon: '💇‍♀️',
      power: 1.8,
      description: 'Use na potência mais baixa possível.',
      position: {
        top: '85%',
        left: '60%',
        background: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)'
      },
      room: 'Banheiro'
    }
  ];

  pick(applianceId: string) {
    this.applianceSelected.emit(applianceId);
  }

  // Método para obter appliances por cômodo
  getAppliancesByRoom(room: string): Appliance[] {
    return this.appliances.filter(appliance => appliance.room === room);
  }
}