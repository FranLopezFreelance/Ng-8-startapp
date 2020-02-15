import { isLoggedIn } from './auth-store/auth.selectors';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app-store';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean> {
        return this.store.pipe(
          select(isLoggedIn),
          tap(loggedIn => {
            if (!loggedIn) {
              this.router.navigateByUrl('login');
            }
          })
        )
    }
}
