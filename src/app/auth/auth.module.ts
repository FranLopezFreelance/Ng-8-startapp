import { AuthEffects } from './auth-store/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './auth-store';

@NgModule({
  declarations: [ LoginComponent, RegisterComponent ],
  imports: [ CommonModule, SharedModule, AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.authReducer),
    EffectsModule.forFeature([ AuthEffects ])
  ],
  providers: [ AuthGuard ]
})
export class AuthModule { }
