import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgentComponent} from './agent/agent.component';
import {DashBoardComponent} from './dash-board/dash-board.component';


const routes: Routes = [
  { path: '', redirectTo: 'agent', pathMatch: 'full' },
  { path: 'agent', component: AgentComponent },
  { path: 'dash-board', component: DashBoardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
