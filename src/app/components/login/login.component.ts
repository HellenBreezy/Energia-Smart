import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
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
  nameForm!: FormGroup;
  
  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    localStorage.clear();
    this.nameForm = this.fb.group({
      username: ['', Validators.required],
    });
  }

  onSubmit(form: NgForm) {

    const name = (this.tempName || '').trim();
    if (!name) {
      // o form já previne, mas mantemos redundância
      return;
    }

    localStorage.setItem('userName', this.tempName);
    this.router.navigate(['/home']);
  }
}
