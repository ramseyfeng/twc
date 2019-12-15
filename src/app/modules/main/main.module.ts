import { NgModule } from '@angular/core';
import {MainRoutingModule} from './main-routing.module';
import {MainComponent} from './page/main.component';
import {SharedModule} from '../../shared/shared.module';

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
