import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twc';
  sidebarMenus = [
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
