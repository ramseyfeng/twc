import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchTextInputComponent} from './search-text-input/search-text-input.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    SearchTextInputComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    SearchTextInputComponent,
    FormsModule,
    MaterialModule,
    FlexLayoutModule
  ]

})
export class SharedModule {
}
