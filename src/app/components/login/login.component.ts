import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  userName: string | null = null;  
  tempName: string = '';          
  currentTip: string = 'Desligue a luz ao sair do ambiente.';

  constructor(private router: Router) {}


  ngOnInit(): void {
    localStorage.clear();
  }

  onClick(): void {
    localStorage.setItem('userName', this.tempName);
    this.router.navigate(['/home']);
  }
}
