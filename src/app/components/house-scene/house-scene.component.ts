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

  appliances: Appliance[] = [
    {
      id: 'tv',
      name: 'TV',
      icon: '📺',
      power: 0.15,
      description: 'Televisores modernos consomem menos energia no modo de espera.',
      position: {
        top: '50px',
        left: '100px',
        background: 'linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%)'
      }
    },
    {
      id: 'fridge',
      name: 'Geladeira',
      icon: '❄️',
      power: 0.2,
      description: 'Geladeiras consomem mais energia quando a porta é aberta frequentemente.',
      position: {
        top: '50px',
        left: 'calc(100% - 180px)',
        background: 'linear-gradient(135deg, #6ce4ff 0%, #42a5f5 100%)'
      }
    },
    {
      id: 'shower',
      name: 'Chuveiro',
      icon: '🚿',
      power: 5.0,
      description: 'Chuveiros elétricos são uns dos maiores consumidores de energia.',
      position: {
        top: '150px',
        left: '150px',
        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
      }
    },
    {
      id: 'washing',
      name: 'Máquina de Lavar',
      icon: '🧺',
      power: 1.0,
      description: 'Use a máquina com carga completa para economizar energia e água.',
      position: {
        top: '150px',
        left: 'calc(100% - 230px)',
        background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
      }
    },
    {
      id: 'lamp',
      name: 'Lâmpada',
      icon: '💡',
      power: 0.01,
      description: 'Lâmpadas LED consomem até 80% menos que as incandescentes.',
      position: {
        top: '250px',
        left: '250px',
        background: 'linear-gradient(135deg, #ffe29f 0%, #ffa99f 100%)'
      }
    },
    {
      id: 'ac',
      name: 'Ar-Condicionado',
      icon: '❄️',
      power: 1.5,
      description: 'Manter o ar-condicionado a 23°C economiza energia.',
      position: {
        top: '250px',
        left: 'calc(100% - 330px)',
        background: 'linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)'
      }
    },
    {
      id: 'computer',
      name: 'Computador',
      icon: '💻',
      power: 0.1,
      description: 'Configure modo de economia de energia no seu computador.',
      position: {
        top: '350px',
        left: '180px',
        background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
      }
    },
    {
      id: 'microwave',
      name: 'Micro-ondas',
      icon: '🍲',
      power: 1.2,
      description: 'Desligue da tomada quando não estiver usando.',
      position: {
        top: '350px',
        left: 'calc(100% - 280px)',
        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
      }
    }
  ];

  pick(applianceId: string) {
    this.applianceSelected.emit(applianceId);
  }
}