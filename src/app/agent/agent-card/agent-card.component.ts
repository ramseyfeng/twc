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

  @Input() agent: IAgent;
  resourceStr: string;
  private unsubscribe: Subject<void> = new Subject();
  osImages = {
    windows: '/assets/os-icons/windows.png',
    ubuntu: '/assets/os-icons/ubuntu.png',
    debian: '/assets/os-icons/debin.png',
    suse: '/assets/os-icons/suse.png',
    centos: '/assets/os-icons/cent_os.png'
  };


  constructor(private agentSvc: AgentService, private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  deleteResource(resource: string) {
    this.agentSvc.deleteAgentResource(resource, this.agent)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe({
        next: data => this.agent = data
      });
  }

  addResourceDialog() {
    const dialogRef = this.dialog.open(AddResourceDialogComponent, {
      width: '570px',
      autoFocus: true,
      data: {name: this.resourceStr},
      panelClass: 'custom-dialog-container',
      disableClose: true,
      closeOnNavigation: false
    });

    dialogRef.afterClosed()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(result => {
        if (result === undefined) {
          return;
        }
        this.resourceStr = result;
        this.agentSvc.addResource(this.resourceStr, this.agent)
          .pipe(takeUntil(this.unsubscribe))
          .subscribe({
            next: data => this.agent = data
          });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
