import { API_URL, HTTP_OPTIONS } from './../../shared/utils/HTTP';
import { Injectable } from '@angular/core';
import { JwtHelperService  } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  user: User;
  token: string;
  private helper = new JwtHelperService();

  constructor(
      private http: HttpClient,
      private router: Router
    ) {
      this.loadFromStorage();
    }

  loadFromStorage() {
    if (localStorage.getItem('access_token')) {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.token = localStorage.getItem('access_token');
    } else {
      this.token = '';
      this.user = undefined;
    }
    return this.user;
  }

  login( data: any): Observable<any> {
    if (data.rememberme) {
        localStorage.setItem('email', data.email);
    } else {
        localStorage.removeItem('email');
    }

    const dataLogin = {
      email: data.email,
      password: data.password
    };

    return this.http.post(API_URL + 'auth/login', dataLogin, HTTP_OPTIONS).pipe(
        map( (resp: any) => {
            localStorage.setItem('access_token', resp.access_token);
            localStorage.setItem('token_type', resp.token_type);
            localStorage.setItem('expires_in', resp.expires_in);
            return resp.user;
    }));
}

  getToken() {
    return localStorage.getItem('access_token');
  }

  isLogedIn() {
    const token = this.getToken();
    return !this.helper.isTokenExpired(token);
  }

  logOut() {
    this.user = null;
    this.token = '';
    localStorage.removeItem('access_token');
    localStorage.removeItem('token_type');
    localStorage.removeItem('expires_in');
    this.router.navigate(['/login']);
  }
}
