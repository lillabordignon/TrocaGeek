import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionfigureComponent } from './actionfigure.component';

describe('ActionfigureComponent', () => {
  let component: ActionfigureComponent;
  let fixture: ComponentFixture<ActionfigureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionfigureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
