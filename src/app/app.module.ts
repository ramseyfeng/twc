import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MastheadComponent } from './masthead/masthead.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AgentComponent } from './agent/agent.component';
import { MyCruiseComponent } from './my-cruise/my-cruise.component';
import { HelpComponent } from './help/help.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { AgentSummaryComponent } from './agent-summary/agent-summary.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AgentToolbarComponent } from './agent-toolbar/agent-toolbar.component';
import { FilterTabsComponent } from './filter-tabs/filter-tabs.component';
import { IconsFilterComponent } from './icons-filter/icons-filter.component';
import { SearchTextInputComponent } from './shared/search-text-input/search-text-input.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentCardComponent } from './agent-card/agent-card.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryAgentsService} from './agent/in-memory-agents.service';
import { AddResourceDialogComponent } from './add-resource-dialog/add-resource-dialog.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MastheadComponent,
    SidebarNavComponent,
    MainComponent,
    AgentComponent,
    DashBoardComponent,
    MyCruiseComponent,
    HelpComponent,
    DashBoardComponent,
    AgentSummaryComponent,
    StatisticsComponent,
    AgentToolbarComponent,
    FilterTabsComponent,
    IconsFilterComponent,
    SearchTextInputComponent,
    AgentListComponent,
    AgentCardComponent,
    AddResourceDialogComponent
  ],
  entryComponents: [AddResourceDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryAgentsService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
