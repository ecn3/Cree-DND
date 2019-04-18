import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRowRaceComponent } from './race-row-race.component';

describe('RaceRowRaceComponent', () => {
  let component: RaceRowRaceComponent;
  let fixture: ComponentFixture<RaceRowRaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceRowRaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRowRaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
