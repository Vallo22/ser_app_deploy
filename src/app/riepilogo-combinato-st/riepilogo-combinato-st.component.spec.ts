import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiepilogoCombinatoStComponent } from './riepilogo-combinato-st.component';

describe('RiepilogoCombinatoStComponent', () => {
  let component: RiepilogoCombinatoStComponent;
  let fixture: ComponentFixture<RiepilogoCombinatoStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiepilogoCombinatoStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiepilogoCombinatoStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
