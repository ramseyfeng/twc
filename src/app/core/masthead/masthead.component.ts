import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-masthead',
  templateUrl: './masthead.component.html',
  styleUrls: ['./masthead.component.scss']
})
export class MastheadComponent implements OnInit {
  @Output() menuToggled = new EventEmitter();
  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuToggled.emit();
  }
}
