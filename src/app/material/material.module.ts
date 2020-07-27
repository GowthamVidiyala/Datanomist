import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button'
import {MatInputModule} from '@angular/material/input'
import {MatSliderModule} from '@angular/material/slider'
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field'

const Materials = [
  MatButtonModule,
  MatInputModule,
  MatSliderModule,
  MatSelectModule,
  MatIconModule,
  MatChipsModule,
  MatFormFieldModule
]
 
@NgModule({
  imports: [Materials],
  exports: [Materials]
})
export class MaterialModule { }
