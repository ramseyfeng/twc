import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCruiseComponent } from './my-cruise.component';

describe('MyCruiseComponent', () => {
  let component: MyCruiseComponent;
  let fixture: ComponentFixture<MyCruiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCruiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCruiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
