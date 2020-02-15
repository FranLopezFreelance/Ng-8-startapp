import { login } from './auth/auth-store/auth.actions';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AppState } from './app-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'ng8';

  constructor(
    private auth: AuthService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    const user = this.auth.loadFromStorage();
    if (user) {
      this.store.dispatch(login({ user }));
    }
  }
}
