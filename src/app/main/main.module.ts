import { NgModule } from '@angular/core';
import {MainComponent} from './main.component';
import {SharedModule} from '../shared/shared.module';
import {MainRoutingModule} from './main-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule
  ]
})
export class MainModule { }
