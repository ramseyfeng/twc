import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FooterComponent} from './footer/footer.component';
import {MastheadComponent} from './masthead/masthead.component';
import {UserMenuComponent} from './user-menu/user-menu.component';
import { SampleComponent } from './sample/sample.component';

@NgModule({
  declarations: [MastheadComponent, FooterComponent, UserMenuComponent, SampleComponent],
  exports: [
    MastheadComponent,
    FooterComponent,
    UserMenuComponent,
  ],
  entryComponents: [SampleComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule {
}
