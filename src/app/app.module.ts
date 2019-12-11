import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {SharedModule} from './shared/shared.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import {CoreModule} from './core/core.module';
import {MainModule} from './modules/main/main.module';
import {AgentModule} from './modules/agent/agent.module';
import {InMemoryAgentsService} from './core/mocks/in-memory-agents.service';
import {MyCruiseModule} from './modules/my-cruise/my-cruise.module';
import {HelpModule} from './modules/help/help.module';
import {DashBoardModule} from './modules/dash-board/dash-board.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MainModule,
    AgentModule,
    FlexLayoutModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryAgentsService),
    CoreModule,
    MyCruiseModule,
    HelpModule,
    DashBoardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
