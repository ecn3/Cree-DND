import { Component, OnInit, Input } from '@angular/core';
import { Race } from '../../../race';

@Component({
  selector: 'app-race-row-publication',
  templateUrl: './race-row-publication.component.html',
  styleUrls: ['./race-row-publication.component.css']
})
export class RaceRowPublicationComponent implements OnInit {
  @Input() public race: Race;

  constructor() { }

  ngOnInit() {
  }

}
