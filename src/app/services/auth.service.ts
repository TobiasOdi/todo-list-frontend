import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private router: Router) { }

  public loginWithUsernameAndPassword(username: string, password: string) {
    const url = environment.baseUrl + '/login/';
    const body = {
      "username": username,
      "password": password
    }
    return lastValueFrom(this.httpClient.post(url, body));
  }

  public laodTodos() {
    const url = environment.baseUrl + '/todos/';
    return lastValueFrom(this.httpClient.get(url));
  }
}
