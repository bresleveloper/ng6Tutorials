import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCompaComponent } from './la-compa.component';

describe('LaCompaComponent', () => {
  let component: LaCompaComponent;
  let fixture: ComponentFixture<LaCompaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCompaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCompaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
