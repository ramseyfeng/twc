import {Component, Input, OnInit} from '@angular/core';
import {ISummary} from '../../../shared/models/summary';

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
