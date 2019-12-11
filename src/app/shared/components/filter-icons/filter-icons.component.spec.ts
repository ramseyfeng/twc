import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterIconsComponent } from './filter-icons.component';

describe('FilterIconsComponent', () => {
  let component: FilterIconsComponent;
  let fixture: ComponentFixture<FilterIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
