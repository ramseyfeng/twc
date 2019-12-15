import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {RouterModule} from '@angular/router';
import {SearchTextInputComponent} from './components/search-text-input/search-text-input.component';
import {FilterIconsComponent} from './components/filter-icons/filter-icons.component';
import {SidebarNavComponent} from './components/sidebar-nav/sidebar-nav.component';
import {FilterTabsComponent} from './components/filter-tabs/filter-tabs.component';
import {MaterialModule} from '../modules/material/material.module';


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
    SidebarNavComponent,
  ]

})
export class SharedModule {
}
