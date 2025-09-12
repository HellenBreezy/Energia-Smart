import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  houseBackgroundImage = '/images/home.png';
  
  appliances: Appliance[] = [
    {
      id: 'tv',
      name: 'TV',
      icon: '/images/tv.png',
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
      id: 'geladeira',
      name: 'Geladeira',
      icon: '/images/geladeira.png',
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
      id: 'Chuveiro',
      name: 'Chuveiro',
      icon: '/images/chuveiro.png',
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
      id: 'maquinaLavar',
      name: 'Máquina de Lavar',
      icon: '/images/maquina-de-lavar.png',
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
      id: 'lampada',
      name: 'Lâmpada',
      icon: '/images/lampada.png',
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
      id: 'arCondicionado',
      name: 'Ar-Condicionado',
      icon: '/images/ar-condicionado.png',
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
      id: 'computador',
      name: 'Computador',
      icon: '/images/computador.png',
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
      id: 'microondas',
      name: 'Micro-ondas',
      icon: '/images/microondas.png',
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
      id: 'liquidificador',
      name: 'Liquidificador',
      icon: '/images/liquidificador.png',
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
      id: 'secadorCabelo',
      name: 'Secador de Cabelo',
      icon: '/images/secador-de-cabelo.png',
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