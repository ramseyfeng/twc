import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {DashBoardComponent} from './page/dash-board.component';

@NgModule({
  declarations: [DashBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'dash-board', component: DashBoardComponent}
    ])
  ]
})
export class DashBoardModule { }
