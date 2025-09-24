import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-login',
  standalone: true,
  imports: [],
  templateUrl: './header-login.component.html',
  styleUrl: './header-login.component.css'
})
export class HeaderLoginComponent {
  @Input() title: string = 'Energia Smart';
  
  constructor(private router: Router) {}
  
  goHome() {
    this.router.navigate(['/']); // ou a rota da sua home principal
  }
}
