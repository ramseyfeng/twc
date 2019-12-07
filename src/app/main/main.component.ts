import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  sidebarMenus;

  constructor() {
  }

  ngOnInit() {
    this.sidebarMenus = [
      {
        link: '/dash-board',
        label: 'Dash Board',
        icon: 'icon-dashboard'
      },
      {
        link: '/agent',
        label: 'Agent',
        icon: 'icon-sitemap'
      },
      {
        link: '/my-cruise',
        label: 'My Cruise',
        icon: 'icon-boat'
      },
      {
        link: '/help',
        label: 'Help',
        icon: 'icon-life-bouy'
      }
    ];
  }

}
