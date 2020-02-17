import { Store, select } from '@ngrx/store';
import { tap, map, shareReplay } from 'rxjs/operators';
import { ClientsService } from './../../core/services/clients.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/shared/interfaces';
import { AppState } from 'src/app/app-store';
import { selectAllClients } from './clients-store/clients.selectors';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.sass']
})
export class ClientsComponent implements OnInit {

  clients$: Observable<Client[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loadClients();
    this.loading$ = this.clients$.pipe(
      map(() => !!this.clients$)
    );
  }

  loadClients() {
    this.clients$ = this.store.pipe(
      select(selectAllClients),
    )
  }

}
