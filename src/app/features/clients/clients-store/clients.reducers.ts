import { ClientsActions } from './clients.actions';
import { Client } from 'src/app/shared/interfaces';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { on, createReducer } from '@ngrx/store';

export interface ClientsState extends EntityState<Client> {
  allClientsLoaded: boolean
}

export const adapter = createEntityAdapter<Client>();

export const initialClientsState = adapter.getInitialState({
  allClientsLoaded: false
});

export const clientsReducer = createReducer(
  initialClientsState,
  on(ClientsActions.allClientsLoaded,
    (state, action) => adapter.addAll(action.clients,
      {...state, allClientsLoaded: true }))
);

export const {
  selectAll
} = adapter.getSelectors();


