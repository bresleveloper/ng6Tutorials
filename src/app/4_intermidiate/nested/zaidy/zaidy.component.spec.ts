import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZaidyComponent } from './zaidy.component';

describe('ZaidyComponent', () => {
  let component: ZaidyComponent;
  let fixture: ComponentFixture<ZaidyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZaidyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZaidyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
