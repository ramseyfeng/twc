import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HelpComponent } from './help/help.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryAgentsService} from './agent/in-memory-agents.service';
import {SharedModule} from './shared/shared.module';
import {AgentModule} from './agent/agent.module';
import {MainModule} from './main/main.module';
import { MyCruiseComponent } from './my-cruise/my-cruise.component';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    HelpComponent,
    DashBoardComponent,
    MyCruiseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MainModule,
    AgentModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryAgentsService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
