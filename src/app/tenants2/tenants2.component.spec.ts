import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tenants2Component } from './tenants2.component';

describe('Tenants2Component', () => {
  let component: Tenants2Component;
  let fixture: ComponentFixture<Tenants2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tenants2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tenants2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
