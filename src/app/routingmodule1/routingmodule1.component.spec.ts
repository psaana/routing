import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Routingmodule1Component } from './routingmodule1.component';

describe('Routingmodule1Component', () => {
  let component: Routingmodule1Component;
  let fixture: ComponentFixture<Routingmodule1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Routingmodule1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Routingmodule1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
