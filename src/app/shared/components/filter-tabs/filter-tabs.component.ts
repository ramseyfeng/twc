import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filter-tabs',
  templateUrl: './filter-tabs.component.html',
  styleUrls: ['./filter-tabs.component.scss']
})
export class FilterTabsComponent implements OnInit {
  @Input() tabs: string[];
  @Output() tabChanged = new EventEmitter();
  selectedTab: string;

  constructor() {
  }

  ngOnInit() {
    this.selectedTab = 'all';
  }

  setTab(tab: string) {
    if (this.selectedTab !== tab) {
      this.tabChanged.emit(tab);
    }
    this.selectedTab = tab;
  }
}
