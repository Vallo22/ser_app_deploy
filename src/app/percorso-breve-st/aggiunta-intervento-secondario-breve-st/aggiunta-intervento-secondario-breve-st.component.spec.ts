import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntaInterventoSecondarioBreveStComponent } from './aggiunta-intervento-secondario-breve-st.component';

describe('AggiuntaInterventoSecondarioBreveStComponent', () => {
  let component: AggiuntaInterventoSecondarioBreveStComponent;
  let fixture: ComponentFixture<AggiuntaInterventoSecondarioBreveStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiuntaInterventoSecondarioBreveStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiuntaInterventoSecondarioBreveStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
