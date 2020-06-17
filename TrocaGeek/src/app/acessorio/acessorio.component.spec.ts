import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessorioComponent } from './acessorio.component';

describe('AcessorioComponent', () => {
  let component: AcessorioComponent;
  let fixture: ComponentFixture<AcessorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcessorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcessorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
