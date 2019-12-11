import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {HelpComponent} from './page/help.component';

@NgModule({
  declarations: [HelpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'help', component: HelpComponent}
    ])
  ]
})
export class HelpModule { }
