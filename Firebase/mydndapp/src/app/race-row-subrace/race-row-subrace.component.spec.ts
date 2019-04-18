import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRowSubraceComponent } from './race-row-subrace.component';

describe('RaceRowSubraceComponent', () => {
  let component: RaceRowSubraceComponent;
  let fixture: ComponentFixture<RaceRowSubraceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceRowSubraceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRowSubraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
