import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRowPageComponent } from './race-row-page.component';

describe('RaceRowPageComponent', () => {
  let component: RaceRowPageComponent;
  let fixture: ComponentFixture<RaceRowPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceRowPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
