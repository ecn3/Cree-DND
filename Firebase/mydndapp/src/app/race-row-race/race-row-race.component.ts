import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-row-race',
  templateUrl: './race-row-race.component.html',
  styleUrls: ['./race-row-race.component.css']
})
export class RaceRowRaceComponent implements OnInit {
  @Input() public race: Race;

  constructor() { }

  ngOnInit() {
  }

}
