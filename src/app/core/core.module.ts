import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [ NavbarComponent ],
  imports: [ CommonModule, RouterModule, HttpClientModule, SharedModule ],
  exports: [ NavbarComponent, RouterModule, HttpClientModule ],
  providers: [ AuthService ]
})
export class CoreModule { }
