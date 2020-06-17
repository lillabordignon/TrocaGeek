import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalharComponent } from './detalhar.component';

describe('DetalharComponent', () => {
  let component: DetalharComponent;
  let fixture: ComponentFixture<DetalharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
