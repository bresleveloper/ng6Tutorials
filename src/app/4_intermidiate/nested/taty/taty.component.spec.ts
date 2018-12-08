import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TatyComponent } from './taty.component';

describe('TatyComponent', () => {
  let component: TatyComponent;
  let fixture: ComponentFixture<TatyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TatyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TatyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
