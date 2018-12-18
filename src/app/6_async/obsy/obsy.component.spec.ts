import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsyComponent } from './obsy.component';

describe('ObsyComponent', () => {
  let component: ObsyComponent;
  let fixture: ComponentFixture<ObsyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObsyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObsyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
