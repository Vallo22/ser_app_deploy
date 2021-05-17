import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoEdificioStComponent } from './tipo-edificio-st.component';

describe('TipoEdificioStComponent', () => {
  let component: TipoEdificioStComponent;
  let fixture: ComponentFixture<TipoEdificioStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoEdificioStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoEdificioStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
