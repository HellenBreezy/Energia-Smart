import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderLoginComponent } from '../header-login/header-login.component';

@Component({
  selector: 'app-home-principal',
  standalone: true,
  imports: [CommonModule, HeaderLoginComponent],
  templateUrl: './home-principal.component.html',
  styleUrl: './home-principal.component.css'
})
export class HomePrincipalComponent {
  constructor(private router: Router) {}

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
