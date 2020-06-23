import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinhasnegociacoesComponent } from './minhasnegociacoes.component';

describe('MinhasnegociacoesComponent', () => {
  let component: MinhasnegociacoesComponent;
  let fixture: ComponentFixture<MinhasnegociacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinhasnegociacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinhasnegociacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
