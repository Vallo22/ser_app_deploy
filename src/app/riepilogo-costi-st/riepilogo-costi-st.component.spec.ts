import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCostiStComponent } from './riepilogo-costi-st.component';

describe('RiepilogoCostiStComponent', () => {
  let component: RiepilogoCostiStComponent;
  let fixture: ComponentFixture<RiepilogoCostiStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiepilogoCostiStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoCostiStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
