import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsBasicsComponent } from './bindings-basics.component';

describe('BindingsBasicsComponent', () => {
  let component: BindingsBasicsComponent;
  let fixture: ComponentFixture<BindingsBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
