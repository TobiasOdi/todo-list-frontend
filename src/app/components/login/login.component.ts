import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

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

  constructor(public AuthService: AuthService) {}

  ngOnInit(): void {
      
  }

  async login() {
    this.isEnabled = true;
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "username": this.username,
      "password": this.password
    });

    const requestOptions:RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    try {
      let resp = await this.AuthService.loginWithUsernameAndPassword(this.username, this.password);
      console.log(resp);
      //let resp = await fetch(environment.baseUrl + "/login/", requestOptions);
      //let json = await resp.json();
      //localStorage.setItem('token', json.token);
      // TODO: Redirect
    } catch(e){
      // Show error message
      console.error(e);
    }
    this.isEnabled = false;
  }
}
