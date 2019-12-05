import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ResourceDialogData} from '../resource-dialog-data';

@Component({
  selector: 'app-add-resource-dialog',
  templateUrl: './add-resource-dialog.component.html',
  styleUrls: ['./add-resource-dialog.component.scss']
})
export class AddResourceDialogComponent implements OnInit {

  constructor(private dialog: MatDialogRef<AddResourceDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: ResourceDialogData) {
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialog.close();
  }
}
