import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RootBasicsComponent } from './root-basics.component';

describe('RootBasicsComponent', () => {
  let component: RootBasicsComponent;
  let fixture: ComponentFixture<RootBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RootBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
