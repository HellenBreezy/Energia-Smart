import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomePrincipalComponent } from './components/home-principal/home-principal.component';
import { AtividadeLampadasComponent } from './components/atividade-lampadas/atividade-lampadas.component';
import { AtividadeAparelhosComponent } from './components/atividade-aparelhos/atividade-aparelhos.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    title: 'full'
  },
  {
    path: 'home',
    component: HomePrincipalComponent,
    title: 'home'
  },
  {
    path: 'atividade-consumo-energia',
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
