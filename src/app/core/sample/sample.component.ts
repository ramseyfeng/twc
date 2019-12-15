import { Component, OnInit } from '@angular/core';
import {ModalService} from '../services/modal.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent implements OnInit {
  ngOnInit(): void {
  }


  constructor(private modalService: ModalService) { }

  public close() {
    this.modalService.destroy();
  }

}
