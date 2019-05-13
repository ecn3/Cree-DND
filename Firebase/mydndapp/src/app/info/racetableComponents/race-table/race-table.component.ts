import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../../race';

@Component({
  selector: 'app-race-table',
  templateUrl: './race-table.component.html',
  styleUrls: ['./race-table.component.css']
})
export class RaceTableComponent implements OnInit {

  @Input() public races: Race[];

  constructor() { }

  ngOnInit() {
  }

}
