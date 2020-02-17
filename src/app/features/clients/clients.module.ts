import { ClientsEffects } from './clients-store/clients.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientsRoutingModule } from './clients-routing.module';
import { ClientsComponent } from './clients.component';
import { ClientComponent } from './client/client.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { clientsReducer } from './clients-store/clients.reducers';

@NgModule({
  declarations: [ ClientsComponent, ClientComponent],
  imports: [ CommonModule, ClientsRoutingModule, SharedModule,
    EffectsModule.forFeature([ ClientsEffects ]),
    StoreModule.forFeature('clients', clientsReducer)
  ]
})
export class ClientsModule { }
