import { NgModule } from '@angular/core';
import {AgentSummaryComponent} from './agent-summary/agent-summary.component';
import {AgentListComponent} from './agent-list/agent-list.component';
import {AgentCardComponent} from './agent-card/agent-card.component';
import {AddResourceDialogComponent} from './add-resource-dialog/add-resource-dialog.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {AgentComponent} from './page/agent.component';
import {SharedModule} from '../../shared/shared.module';
import {AgentRoutingModule} from './agent-routing.module';

@NgModule({
  declarations: [
    AgentComponent,
    AgentSummaryComponent,
    AgentListComponent,
    AgentCardComponent,
    AddResourceDialogComponent,
    StatisticsComponent
  ],
  entryComponents: [AddResourceDialogComponent],
  imports: [
    SharedModule,
    AgentRoutingModule
  ]
})
export class AgentModule {}
