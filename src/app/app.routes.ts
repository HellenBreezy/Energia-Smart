import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // rota raiz
    title: 'Home'
  },
  {
    path: '**',
    redirectTo: '' // redireciona rotas não encontradas para Home
  }
];
