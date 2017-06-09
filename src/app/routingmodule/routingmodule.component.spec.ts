import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingmoduleComponent } from './routingmodule.component';

describe('RoutingmoduleComponent', () => {
  let component: RoutingmoduleComponent;
  let fixture: ComponentFixture<RoutingmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoutingmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
