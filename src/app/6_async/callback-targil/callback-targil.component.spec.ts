import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallbackTargilComponent } from './callback-targil.component';

describe('CallbackTargilComponent', () => {
  let component: CallbackTargilComponent;
  let fixture: ComponentFixture<CallbackTargilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallbackTargilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallbackTargilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
