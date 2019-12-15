import {Component, Input, OnInit} from '@angular/core';
import {IAgent} from '../../../shared/models/agent';

@Component({
  selector: 'app-agent-list',
  templateUrl: './agent-list.component.html',
  styleUrls: ['./agent-list.component.scss']
})
export class AgentListComponent implements OnInit {
  @Input()
  agents: IAgent[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  trackByEmpCode(index: number, agent: IAgent) {
    return agent.id;
  }

}
