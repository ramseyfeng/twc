import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ISummary} from '../summary';

@Component({
  selector: 'app-agent-summary',
  templateUrl: './agent-summary.component.html',
  styleUrls: ['./agent-summary.component.scss']
})
export class AgentSummaryComponent implements OnInit {
  @Input() summary: ISummary;

  constructor() { }

  ngOnInit() {

  }

}
