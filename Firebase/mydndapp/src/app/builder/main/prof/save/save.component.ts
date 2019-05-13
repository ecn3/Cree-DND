import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setStrengthSave() {
    let bonus = Number((document.getElementById("strengthMod") as HTMLInputElement).value);
    if ((document.getElementById("strength-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }

  setDexteritySave() {
    let bonus = Number((document.getElementById("dexterityMod") as HTMLInputElement).value);
    if ((document.getElementById("dexterity-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }

  setConstitutionSave() {
    let bonus = Number((document.getElementById("constitutionMod") as HTMLInputElement).value);
    if ((document.getElementById("constitution-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("constitution-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }

  setIntelligenceSave() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("intelligence-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }

  setWisdomSave() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("wisdom-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }

  setCharismaSave() {
    let bonus = Number((document.getElementById("charismaMod") as HTMLInputElement).value);
    if ((document.getElementById("charisma-save") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
}
