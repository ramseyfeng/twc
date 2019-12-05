import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {AgentService} from '../agent.service';
import {MatDialog} from '@angular/material';
import {AddResourceDialogComponent} from '../add-resource-dialog/add-resource-dialog.component';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {IAgent} from '../agent';

@Component({
  selector: 'app-agent-card',
  templateUrl: './agent-card.component.html',
  styleUrls: ['./agent-card.component.scss']
})
export class AgentCardComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  @Input() agent: IAgent;
  resourceStr: string;

  constructor(private agentSvc: AgentService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  deleteResource(resource: string) {
    this.agentSvc.deleteAgentResource(resource, this.agent)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: data => this.agent = data,
        complete: () => console.log('deleteResource complete')
      });
  }

  addResourceDialog() {
    const dialogRef = this.dialog.open(AddResourceDialogComponent, {
      width: '570px',
      autoFocus: true,
      data: {name: this.resourceStr}
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        this.resourceStr = result;
        this.agentSvc.addResource(this.resourceStr, this.agent)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe({
            next: data => this.agent = data,
            complete: () => console.log('addResourceDialog complete')
          });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
