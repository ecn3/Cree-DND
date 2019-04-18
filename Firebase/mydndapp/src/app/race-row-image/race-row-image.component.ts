import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../race';

@Component({
  selector: 'app-race-row-image',
  templateUrl: './race-row-image.component.html',
  styleUrls: ['./race-row-image.component.css']
})
export class RaceRowImageComponent implements OnInit {
  @Input() public race: Race;
  constructor() { }

  ngOnInit() {
  }

}
