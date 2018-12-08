import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngaleComponent } from './ingale.component';

describe('IngaleComponent', () => {
  let component: IngaleComponent;
  let fixture: ComponentFixture<IngaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
