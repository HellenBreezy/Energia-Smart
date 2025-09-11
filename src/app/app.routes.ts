import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { AtividadeLampadasComponent } from './components/atividade-lampadas/atividade-lampadas.component';
import { AtividadeAparelhosComponent } from './components/atividade-aparelhos/atividade-aparelhos.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePrincipalComponent,
    title: 'Início'
  },
  {
    path: 'home',
    component: HomeComponent,
    title: 'Consumo de Energia'
  },
  {
    path: 'atividade-lampadas',
    component: AtividadeLampadasComponent,
    title: 'Apague as Lâmpadas'
  },
  {
    path: 'atividade-aparelhos',
    component: AtividadeAparelhosComponent,
    title: 'Desligue os Aparelhos'
  },
  {
    path: '**',
    redirectTo: '' // redireciona rotas não encontradas para Home
  }
];
