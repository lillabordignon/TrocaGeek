import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardgameComponent } from './cardgame.component';

describe('CardgameComponent', () => {
  let component: CardgameComponent;
  let fixture: ComponentFixture<CardgameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardgameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
