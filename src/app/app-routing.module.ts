import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './features/home/home.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ClientsModule } from './features/clients/clients.module';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  {
    path: '' ,
    pathMatch: 'full',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./features/home/home.module').then(m => HomeModule)
  },
  {
    path: 'clientes' ,
    loadChildren: () => import('./features/clients/clients.module').then(m => ClientsModule)
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
