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
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ AppComponent, PageNotFoundComponent ],
  imports: [ BrowserModule, HttpClientModule, AuthModule, AppRoutingModule, CoreModule,
    SharedModule, BrowserAnimationsModule, AppStoreModule, EntityDataModule.forRoot(entityConfig) ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
