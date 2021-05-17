import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceStComponent } from './matrice-st.component';

describe('MatriceStComponent', () => {
  let component: MatriceStComponent;
  let fixture: ComponentFixture<MatriceStComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceStComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceStComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
