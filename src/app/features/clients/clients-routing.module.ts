import { ClientsResolver } from './../../core/resolvers/clients.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientsComponent } from './clients.component';

const routes: Routes = [
  { path: '', component: ClientsComponent, resolve: { clients: ClientsResolver } }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [ ClientsResolver ]
})
export class ClientsRoutingModule { }
