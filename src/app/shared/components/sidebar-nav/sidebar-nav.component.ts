import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {
  @Input() open: boolean;
  @Input() navItems: any;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.open = !this.open;
  }
}
