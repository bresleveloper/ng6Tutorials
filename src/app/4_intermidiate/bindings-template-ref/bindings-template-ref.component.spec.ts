import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsTemplateRefComponent } from './bindings-template-ref.component';

describe('BindingsTemplateRefComponent', () => {
  let component: BindingsTemplateRefComponent;
  let fixture: ComponentFixture<BindingsTemplateRefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsTemplateRefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsTemplateRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
