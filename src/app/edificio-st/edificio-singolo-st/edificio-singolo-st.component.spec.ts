import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioSingoloStComponent } from './edificio-singolo-st.component';

describe('EdificioSingoloStComponent', () => {
  let component: EdificioSingoloStComponent;
  let fixture: ComponentFixture<EdificioSingoloStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioSingoloStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioSingoloStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
