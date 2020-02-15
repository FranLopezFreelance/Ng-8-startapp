import { AuthActions } from './auth.actions';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.login),
      tap(action => localStorage.setItem('user', JSON.stringify(action.user)))
    ), { dispatch: false });

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(action => localStorage.removeItem('user'))
    ), { dispatch: false });

  constructor(private actions$: Actions) {}

}
