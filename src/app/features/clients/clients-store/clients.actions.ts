import { createAction, props } from '@ngrx/store';
import { Client } from 'src/app/shared/interfaces';

export const loadAllClients = createAction(
  '[Clients Resolver] Load All Clients'
);

export const allClientsLoaded = createAction(
  '[Load Clients Effects] All Clients Loaded',
  props<{clients: Client[]}>()
)

export const ClientsActions = { loadAllClients, allClientsLoaded };
