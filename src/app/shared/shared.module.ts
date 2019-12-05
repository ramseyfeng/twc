import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchTextInputComponent} from './search-text-input/search-text-input.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    SearchTextInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    SearchTextInputComponent,
    FormsModule
  ]

})
export class SharedModule {
}
