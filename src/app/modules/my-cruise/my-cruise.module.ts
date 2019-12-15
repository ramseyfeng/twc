import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {MyCruiseComponent} from './page/my-cruise.component';

@NgModule({
  declarations: [MyCruiseComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'my-cruise', component: MyCruiseComponent}
    ])
  ]
})
export class MyCruiseModule { }
