import {Component, OnDestroy, OnInit} from '@angular/core';
import {AgentService} from '../agent.service';
import {Agent} from './Agent';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.scss']
})
export class AgentComponent implements OnInit, OnDestroy {
  private unsubscribe: Subject<void> = new Subject();
  private agents: Agent[];
  filteredAgents: Agent[];

  constructor(private agentSvc: AgentService) {
  }

  ngOnInit() {
    this.agentSvc.getAgents().pipe(takeUntil(this.unsubscribe)).subscribe({
      next: (data: Agent[]) => {
        this.agents = data;
        this.filteredAgents = data;
      }
    });
  }

  searchTextChanged($event: string) {
    const filterBy = $event.toLocaleLowerCase();
    this.filteredAgents = filterBy === '' ?
      this.agents : this.agents.filter((agent: Agent) => agent.name.toLocaleLowerCase().includes(filterBy));
  }

  filterAgentsByType(type: string) {
    if (type === 'all') {
      this.filteredAgents = this.agents;
      return;
    }
    this.filteredAgents = this.agents.filter((agent: Agent) => agent.type === type);
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
