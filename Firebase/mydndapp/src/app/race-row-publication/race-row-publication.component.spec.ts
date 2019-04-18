import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceRowPublicationComponent } from './race-row-publication.component';

describe('RaceRowPublicationComponent', () => {
  let component: RaceRowPublicationComponent;
  let fixture: ComponentFixture<RaceRowPublicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaceRowPublicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceRowPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
