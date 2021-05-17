import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonaSismicaStComponent } from './zona-sismica-st.component';

describe('ZonaSismicaStComponent', () => {
  let component: ZonaSismicaStComponent;
  let fixture: ComponentFixture<ZonaSismicaStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZonaSismicaStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZonaSismicaStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
