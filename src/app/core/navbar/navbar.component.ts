import { logout } from './../../auth/auth-store/auth.actions';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from 'src/app/app-store';
import { isLoggedIn, isLoggedOut } from 'src/app/auth/auth-store/auth.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logOut() {
    this.store.dispatch(logout());
    this.authService.logOut();
  }

}
