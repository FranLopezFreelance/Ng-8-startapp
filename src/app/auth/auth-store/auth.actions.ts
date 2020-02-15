import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/interfaces';

export const login = createAction(
  "[Login Page] User Login",
  props<{user: User}>()
);

export const logout = createAction(
  "[NavBar] User Logout"
);

export const AuthActions = { login, logout }
