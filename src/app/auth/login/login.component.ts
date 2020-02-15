import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app-store';
import { login } from '../auth-store/auth.actions';
import { noop } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  email: string;
  loginForm: FormGroup;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private store: Store<AppState>
  ) {
    this.loginForm = this.fb.group({
      email: [ null, Validators.compose([Validators.required, Validators.email])],
      password: [ null, Validators.compose([Validators.required])],
      rememberme: false
    });
  }

  ngOnInit() {
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 0 ) {
      this.loginForm.get('email').setValue(this.email);
      this.loginForm.get('rememberme').setValue(true);
    }
  }

  public login() {
      this.authService.login(this.loginForm.value)
        .pipe(
          tap(user => {
            this.store.dispatch(login({user}))
            this.router.navigate(['/']);
          })
        ).subscribe(
          noop,
          () => alert('Login Failed')
        );
  }

}
