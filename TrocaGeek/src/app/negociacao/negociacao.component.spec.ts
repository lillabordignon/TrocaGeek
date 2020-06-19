import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NegociacaoComponent } from './negociacao.component';

describe('NegociacaoComponent', () => {
  let component: NegociacaoComponent;
  let fixture: ComponentFixture<NegociacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NegociacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NegociacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
