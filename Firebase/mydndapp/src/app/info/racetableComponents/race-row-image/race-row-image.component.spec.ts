import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRowImageComponent } from './race-row-image.component';

describe('RaceRowImageComponent', () => {
  let component: RaceRowImageComponent;
  let fixture: ComponentFixture<RaceRowImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceRowImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRowImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
