import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentToolbarComponent } from './agent-toolbar.component';

describe('AgentToolbarComponent', () => {
  let component: AgentToolbarComponent;
  let fixture: ComponentFixture<AgentToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
