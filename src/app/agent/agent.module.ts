import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {AgentComponent} from './agent.component';
import {AgentSummaryComponent} from './agent-summary/agent-summary.component';
import {AgentListComponent} from './agent-list/agent-list.component';
import {AgentCardComponent} from './agent-card/agent-card.component';
import {AddResourceDialogComponent} from './add-resource-dialog/add-resource-dialog.component';
import {StatisticsComponent} from './statistics/statistics.component';

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
    SharedModule
  ]
})
export class AgentModule {}
