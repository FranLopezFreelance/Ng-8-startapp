import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

const MODULES = [
  MatCardModule,
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatDividerModule
]

@NgModule({
  declarations: [],
  imports: [ MODULES ],
  exports: [ MODULES ]
})
export class MaterialModule { }
