import { login } from './auth/auth-store/auth.actions';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app-store';
import { Router, NavigationEnd, NavigationCancel, NavigationError, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'ng8';
  loading = true;

  constructor(
    private auth: AuthService,
    private store: Store<AppState>,
    private router: Router,
  ) {}

  ngOnInit() {

    this.setLoading();

    const user = this.auth.loadFromStorage();
    if (user) {
      this.store.dispatch(login({ user }));
    }
  }

  setLoading() {
    this.router.events.subscribe(event => {
      switch (true) {
          case event instanceof NavigationStart: {
              this.loading = true;
              break;
          }

          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
              this.loading = false;
              break;
          }
          default: {
              break;
          }
      }
    });
  }
}
