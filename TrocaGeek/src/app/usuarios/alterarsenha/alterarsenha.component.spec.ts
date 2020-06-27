import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarsenhaComponent } from './alterarsenha.component';

describe('AlterarsenhaComponent', () => {
  let component: AlterarsenhaComponent;
  let fixture: ComponentFixture<AlterarsenhaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterarsenhaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarsenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
