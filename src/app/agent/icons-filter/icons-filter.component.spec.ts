import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsFilterComponent } from './icons-filter.component';

describe('IconsFilterComponent', () => {
  let component: IconsFilterComponent;
  let fixture: ComponentFixture<IconsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
