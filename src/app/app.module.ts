import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppStoreModule } from './app-store/app-store.module';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent ],
  imports: [ BrowserModule, AuthModule, AppRoutingModule, CoreModule,
    SharedModule, BrowserAnimationsModule, AppStoreModule ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
