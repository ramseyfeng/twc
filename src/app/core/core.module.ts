import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MastheadComponent} from './masthead/masthead.component';
import {UserMenuComponent} from './user-menu/user-menu.component';

@NgModule({
  declarations: [MastheadComponent, FooterComponent, UserMenuComponent],
  exports: [
    MastheadComponent,
    FooterComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
