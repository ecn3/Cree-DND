import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../../race';

@Component({
  selector: 'app-race-row-subrace',
  templateUrl: './race-row-subrace.component.html',
  styleUrls: ['./race-row-subrace.component.css']
})
export class RaceRowSubraceComponent implements OnInit {

  @Input() public race: Race;
  
  constructor() { }

  ngOnInit() {
  }

}
