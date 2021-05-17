import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiuntaInterventoSecondarioStComponent } from './aggiunta-intervento-secondario-st.component';

describe('AggiuntaInterventoSecondarioStComponent', () => {
  let component: AggiuntaInterventoSecondarioStComponent;
  let fixture: ComponentFixture<AggiuntaInterventoSecondarioStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiuntaInterventoSecondarioStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiuntaInterventoSecondarioStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
