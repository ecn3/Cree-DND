import { Component, OnInit } from '@angular/core';
import data from '../../assets/data/races.json';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = 'races';
  public races = data;
  constructor() { }

  ngOnInit() {
  }

}
