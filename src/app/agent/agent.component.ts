import {Component, OnDestroy, OnInit} from '@angular/core';
import {IAgent} from './agent';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {AgentService} from './agent.service';
import {ISummary} from './summary';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  private agents: IAgent[];
  filteredAgents: IAgent[];
  summaryData: ISummary[];
  agentTypes: string[];

  constructor(private agentSvc: AgentService) {
  }

  ngOnInit() {
    this.agentTypes = ['all', 'physical', 'virtual'];
    this.agentSvc.getAgents().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: IAgent[]) => {
        this.agents = data;
        this.filteredAgents = data;
        this.summaryData = this.extractSummaryData(data);
      }
    });
  }

  private extractSummaryData(agents: IAgent[]): ISummary[] {
    const statusCounterMap = {};
    const summaryList = [];
    agents.forEach(agent => {
      if (statusCounterMap[agent.status] === undefined) {
        statusCounterMap[agent.status] = 1;
      } else {
        statusCounterMap[agent.status] = statusCounterMap[agent.status] + 1;
      }
    });
    Object.keys(statusCounterMap).forEach(
      (status) => {
        return summaryList.push({
          status,
          count: statusCounterMap[status]
        });
      }
    );
    return summaryList.sort(({status: a}, {status: b}) => {
      if (a < b) {
        return -1;
      }
      if (b < a) {
        return 1;
      }
      return 0;
    });
  }

  searchTextChanged($event: string) {
    const filterBy = $event.toLocaleLowerCase();
    this.filteredAgents = filterBy === '' ?
      this.agents : this.agents.filter((agent: IAgent) => agent.name.toLocaleLowerCase().includes(filterBy));
  }

  filterAgentsByType(type: string) {
    if (type === 'all') {
      this.filteredAgents = this.agents;
      return;
    }
    this.filteredAgents = this.agents.filter((agent: IAgent) => agent.type === type);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
