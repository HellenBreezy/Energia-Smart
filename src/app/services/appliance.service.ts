import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Appliance {
  id: string;
  name: string;
  icon: string;
  power: number;
  selected: boolean; 
  description: string;
  position: { top: string; left: string; background: string; };
  room: string;
}

@Injectable({ providedIn: 'root' })
export class ApplianceService {
  private appliances: Appliance[] = [
      {
        id: 'tv',
        name: 'TV',
        icon: '/images/tv.png',
        power: 0.15,
        selected: true,
        description: 'Televisores modernos consomem menos energia no modo de espera.',
        position: {
          top: '5%',
          left: '15%',
          background: 'linear-gradient(135deg, #ff9a8b 0%, #ff6a88 100%)'
        },
        room: 'Sala de Estar'
      },
      {
        id: 'geladeira',
        name: 'Geladeira',
        icon: '/images/geladeira.png',
        power: 0.2,
        selected: true,
        description: 'Geladeiras consomem mais energia quando a porta é aberta frequentemente.',
        position: {
          top: '5%',
          left: '50%',
          background: 'linear-gradient(135deg, #6ce4ff 0%, #42a5f5 100%)'
        },
        room: 'Cozinha'
      },
      {
        id: 'Chuveiro',
        name: 'Chuveiro',
        icon: '/images/chuveiro.png',
        power: 5.0,
        selected: true,
        description: 'Chuveiros elétricos são uns dos maiores consumidores de energia.',
        position: {
          top: '78%',
          left: '36%',
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
        },
        room: 'Banheiro'
      },
      {
        id: 'maquinaLavar',
        name: 'Máquina de Lavar',
        icon: '/images/maquina-de-lavar.png',
        power: 1.0,
        selected: true,
        description: 'Use a máquina com carga completa para economizar energia e água.',
        position: {
          top: '75%',
          left: '68%',
          background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)'
        },
        room: 'Lavanderia'
      },
      {
        id: 'lampada',
        name: 'Lâmpada',
        icon: '/images/lampada.png',
        power: 0.01,
        selected: true,
        description: 'Lâmpadas LED consomem até 80% menos que as incandescentes.',
        position: {
          top: '78%',
          left: '5%',
          background: 'linear-gradient(135deg, #ffe29f 0%, #ffa99f 100%)'
        },
        room: 'Quarto'
      },
      {
        id: 'arCondicionado',
        name: 'Ar-Condicionado',
        icon: '/images/ar-condicionado.png',
        power: 1.5,
        selected: true,
        description: 'Manter o ar-condicionado a 23°C economiza energia.',
        position: {
          top: '28%',
          left: '60%',
          background: 'linear-gradient(135deg, #c2e9fb 0%, #a1c4fd 100%)'
        },
        room: 'Sala de Estar'
      },
      {
        id: 'computador',
        name: 'Computador',
        icon: '/images/computador.png',
        power: 0.1,
        selected: true,
        description: 'Configure modo de economia de energia no seu computador.',
        position: {
          top: '50%',
          left: '36%',
          background: 'linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)'
        },
        room: 'Quarto'
      },
      {
        id: 'microondas',
        name: 'Micro-ondas',
        icon: '/images/microondas.png',
        power: 1.2,
        selected: true,
        description: 'Desligue da tomada quando não estiver usando.',
        position: {
          top: '28%',
          left: '20%',
          background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
        },
        room: 'Cozinha'
      },
      {
        id: 'liquidificador',
        name: 'Liquidificador',
        icon: '/images/liquidificador.png',
        power: 0.3,
        selected: true,
        description: 'Use por curtos períodos para economizar energia.',
        position: {
          top: '50%',
          left: '68%',
          background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
        },
        room: 'Cozinha'
      },
      {
        id: 'secadorCabelo',
        name: 'Secador de Cabelo',
        icon: '/images/secador-de-cabelo.png',
        power: 1.8,
        selected: true,
        description: 'Use na potência mais baixa possível.',
        position: {
          top: '55%',
          left: '5%',
          background: 'linear-gradient(135deg, #ffafbd 0%, #ffc3a0 100%)'
        },
        room: 'Banheiro'
      }
    ];

  private appliancesSubject = new BehaviorSubject<Appliance[]>(this.appliances);
  appliances$ = this.appliancesSubject.asObservable();

  getAppliances(): Appliance[] {
    return this.appliances.map(a => ({ ...a }));
  }
}
