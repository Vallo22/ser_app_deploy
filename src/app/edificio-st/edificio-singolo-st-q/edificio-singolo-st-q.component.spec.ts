import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdificioSingoloStQComponent } from './edificio-singolo-st-q.component';

describe('EdificioSingoloStQComponent', () => {
  let component: EdificioSingoloStQComponent;
  let fixture: ComponentFixture<EdificioSingoloStQComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdificioSingoloStQComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdificioSingoloStQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
