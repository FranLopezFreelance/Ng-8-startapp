import { ClientsService } from './../../../core/services/clients.service';
import { ClientsActions } from './clients.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class ClientsEffects {

  loadClients = createEffect(
    () => this.actions$.pipe(
      ofType(ClientsActions.loadAllClients),
      concatMap(action => this.clientsService.getAllClients()),
      map(clients => ClientsActions.allClientsLoaded({clients}))
    )
  );

  constructor(
    private actions$: Actions,
    private clientsService: ClientsService
  ) {}

}
