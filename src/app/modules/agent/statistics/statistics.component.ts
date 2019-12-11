import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnChanges {

  @Input() statistic;
  headers;
  values;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('statistic' in changes && changes.statistic.currentValue) {
      this.statistic = changes.statistic.currentValue;
      this.headers = Object.keys(this.statistic);
      this.values = Object.values(this.statistic);
    }
  }
}
