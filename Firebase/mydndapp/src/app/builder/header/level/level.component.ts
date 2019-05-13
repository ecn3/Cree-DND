import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.css']
})
export class LevelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setProficiency() {
    let level = Number((document.getElementById("level") as HTMLInputElement).value);
    let proficiency = 1 + Math.ceil(level / 4);
    document.getElementById("proficiency").setAttribute("value", proficiency.toString());
  }
}
