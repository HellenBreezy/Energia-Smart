import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() title: string = 'Energia Smart';

  constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/home']); // ou a rota da sua home principal
  }
}
