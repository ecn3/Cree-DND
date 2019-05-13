import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../../race';

@Component({
  selector: 'app-race-row-page',
  templateUrl: './race-row-page.component.html',
  styleUrls: ['./race-row-page.component.css']
})
export class RaceRowPageComponent implements OnInit {
  @Input() public race: Race;

  constructor() { }

  ngOnInit() {
  }

}
