import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCostiCeComponent } from './riepilogo-costi-ce.component';

describe('RiepilogoCostiCeComponent', () => {
  let component: RiepilogoCostiCeComponent;
  let fixture: ComponentFixture<RiepilogoCostiCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiepilogoCostiCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoCostiCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
