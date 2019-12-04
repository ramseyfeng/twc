import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ResourceDialogData} from '../agent/ResourceDialogData';

@Component({
  selector: 'app-add-resource-dialog',
  templateUrl: './add-resource-dialog.component.html',
  styleUrls: ['./add-resource-dialog.component.scss']
})
export class AddResourceDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<AddResourceDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: ResourceDialogData) {
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialog.close();
  }
}
