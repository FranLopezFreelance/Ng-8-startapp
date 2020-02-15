import { User } from './../../shared/interfaces';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { login, logout } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}

export const initialAuthState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialAuthState,
  on(login, (state, action) => {
    return {
      user: action.user
    }
  }),
  on(logout, (state, action) => {
    return {
      user: undefined
    }
  })
)
