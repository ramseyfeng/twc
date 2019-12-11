import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AgentComponent} from './page/agent.component';


const routes: Routes = [
  {path: 'agent', component: AgentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
