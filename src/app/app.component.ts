import {Component, OnInit} from '@angular/core';
import {SampleComponent} from './core/sample/sample.component';
import {ModalService} from './core/services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

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

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    const inputs = {
      isMobile: false
    };
    this.modalService.init(SampleComponent, inputs, {});
  }

}
