import { Store, select } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app-store';
import { tap, first, finalize, filter } from 'rxjs/operators';
import { loadAllClients } from 'src/app/features/clients/clients-store/clients.actions';
import { clientsLoaded } from 'src/app/features/clients/clients-store/clients.selectors';

@Injectable()
export class ClientsResolver implements Resolve<any>{

  loading = false;

  constructor(private store: Store<AppState>) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(clientsLoaded),
      tap(loaded => {
        if (!this.loading && !loaded) {
          this.loading = true;
          this.store.dispatch(loadAllClients());
        }
      }),
      filter(loaded => loaded),
      first(),
      finalize(() => this.loading = false)
    )
  }
}
