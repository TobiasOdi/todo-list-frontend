import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  isEnabled:boolean = false;

  constructor(public AuthService: AuthService, private router: Router) {}

  ngOnInit(): void {
      
  }

  async login() {
    try {
      let resp: any = await this.AuthService.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      localStorage.setItem('token', resp['token'])
      this.router.navigateByUrl('/todos');
    } catch(e){
      alert('Login fehlgeschlagen!');
      console.error(e);
    }
    this.isEnabled = false;
  }

  goToTodos() {
    this.router.navigateByUrl('/todos');
  }
}
