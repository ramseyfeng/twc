import {NgModule} from '@angular/core';
import {
  /*MatButtonModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTabsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule,
  MatButtonToggleModule,*/
  MatDialogModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

const materials = [
  HttpClientModule,
  /*MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule,
  MatSidenavModule,
  MatListModule,
  MatTabsModule,
  MatFormFieldModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatDividerModule,
  MatCardModule,
  MatButtonToggleModule,*/
  MatDialogModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materials
  ],
  exports: [
    ...materials
  ]
})
export class MaterialModule {

}
