import { InterceptorsProvider } from './interceptors/interceptors.provider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServicesProvider } from './services/services.provider';

@NgModule({
  declarations: [ NavbarComponent ],
  imports: [ CommonModule, RouterModule, HttpClientModule, SharedModule ],
  exports: [ RouterModule, HttpClientModule, NavbarComponent ],
  providers: [ ServicesProvider, InterceptorsProvider ]
})
export class CoreModule { }
