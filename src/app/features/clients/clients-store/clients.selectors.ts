import { ClientsState } from './clients.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClients from './clients.reducers';

export const selectClientsState = createFeatureSelector<ClientsState>('clients');

export const selectAllClients = createSelector(
  selectClientsState,
  fromClients.selectAll
)

export const clientsLoaded = createSelector(
  selectClientsState,
  state => state.allClientsLoaded
)
