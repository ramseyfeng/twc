import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar-nav',
  templateUrl: './sidebar-nav.component.html',
  styleUrls: ['./sidebar-nav.component.scss']
})
export class SidebarNavComponent implements OnInit {
  @Input() navItems: any;
  open = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.open = !this.open;
  }
}
