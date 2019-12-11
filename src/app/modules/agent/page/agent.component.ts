import {Component, OnDestroy, OnInit} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {ISummary} from '../../../shared/models/summary';
import {IAgent} from '../../../shared/models/agent';
import {AgentService} from '../../../core/services/agent.service';

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
  statisticData: any;

  constructor(private agentSvc: AgentService) {
  }

  ngOnInit() {
    this.agentTypes = ['all', 'physical', 'virtual'];
    this.agentSvc.getAgents().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: IAgent[]) => {
        this.agents = data;
        this.filteredAgents = data;
        this.summaryData = this.extractSummaryData(data);
        this.statisticData = this.extractStatisticData(data);
      }
    });
  }

  private groupByProp(list, propKey) {
    const map = {};
    list.forEach((item) => {
      const key = item[propKey];
      const values = map[key];
      if (!values) {
        map[key] = [item];
      } else {
        values.push(item);
      }
    });
    return map;
  }

  private extractStatisticData(data: IAgent[]): any {
    const agentsByType = this.groupByProp(data, 'type');
    const results = {};
    let all = 0;

    Object.keys(agentsByType).forEach(type => {
      all += agentsByType[type].length;
      results[type] = agentsByType[type].length;
    });
    return {
      all,
      ...results
    };
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
