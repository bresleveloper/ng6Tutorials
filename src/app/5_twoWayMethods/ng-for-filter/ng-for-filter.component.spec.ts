import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForFilterComponent } from './ng-for-filter.component';

describe('NgForFilterComponent', () => {
  let component: NgForFilterComponent;
  let fixture: ComponentFixture<NgForFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
