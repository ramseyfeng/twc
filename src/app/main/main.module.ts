import { NgModule } from '@angular/core';
import {MastheadComponent} from './masthead/masthead.component';
import {SidebarNavComponent} from './sidebar-nav/sidebar-nav.component';
import {MainComponent} from './main.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import { UserMenuComponent } from './user-menu/user-menu.component';

@NgModule({
  declarations: [
    MainComponent,
    MastheadComponent,
    SidebarNavComponent,
    UserMenuComponent
  ],
  exports: [
    MastheadComponent,
    MainComponent
  ],
  imports: [
    AppRoutingModule,
    SharedModule
  ]
})
export class MainModule { }
