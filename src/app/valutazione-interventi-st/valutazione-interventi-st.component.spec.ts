import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValutazioneInterventiStComponent } from './valutazione-interventi-st.component';

describe('ValutazioneInterventiStComponent', () => {
  let component: ValutazioneInterventiStComponent;
  let fixture: ComponentFixture<ValutazioneInterventiStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValutazioneInterventiStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValutazioneInterventiStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
