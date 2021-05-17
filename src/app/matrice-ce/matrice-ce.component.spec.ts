import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriceCeComponent } from './matrice-ce.component';

describe('MatriceCeComponent', () => {
  let component: MatriceCeComponent;
  let fixture: ComponentFixture<MatriceCeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatriceCeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatriceCeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
