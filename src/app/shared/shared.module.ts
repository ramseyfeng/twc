import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchTextInputComponent} from './search-text-input/search-text-input.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {FilterTabsComponent} from './filter-tabs/filter-tabs.component';
import {FilterIconsComponent} from './filter-icons/filter-icons.component';
import {SidebarNavComponent} from './sidebar-nav/sidebar-nav.component';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    SearchTextInputComponent,
    FilterTabsComponent,
    FilterIconsComponent,
    SidebarNavComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    SearchTextInputComponent,
    FilterTabsComponent,
    FilterIconsComponent,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    SidebarNavComponent
  ]

})
export class SharedModule {
}
