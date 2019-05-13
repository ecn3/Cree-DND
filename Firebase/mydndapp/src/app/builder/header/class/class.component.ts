import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  classSelector() {
    this.resetSavingThrows();
    let strengthMod = Number((document.getElementById("strengthMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let dexterityMod = Number((document.getElementById("dexterityMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let constitutionMod = Number((document.getElementById("constitutionMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let intelligenceMod = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let wisdomMod = Number((document.getElementById("wisdomMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let charismaMod = Number((document.getElementById("charismaMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let classSelection = (document.getElementById("class") as HTMLInputElement).value;

    if(classSelection === "Barbarian") {
      (document.getElementById("strength-save") as HTMLInputElement).checked = true;
      (document.getElementById("constitution-save") as HTMLInputElement).checked = true;
      (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("constitution-save-amount") as HTMLInputElement).setAttribute("value", constitutionMod.toString());
    } else if(classSelection === "Bard") {
      (document.getElementById("dexterity-save") as HTMLInputElement).checked = true;
      (document.getElementById("charisma-save") as HTMLInputElement).checked = true;
      (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
      (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(classSelection === "Cleric") {
      (document.getElementById("wisdom-save") as HTMLInputElement).checked = true;
      (document.getElementById("charisma-save") as HTMLInputElement).checked = true;
      (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(classSelection === "Druid") {
      (document.getElementById("intelligence-save") as HTMLInputElement).checked = true;
      (document.getElementById("wisdom-save") as HTMLInputElement).checked = true;
      (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
      (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
    } else if(classSelection === "Fighter") {
      (document.getElementById("strength-save") as HTMLInputElement).checked = true;
      (document.getElementById("dexterity-save") as HTMLInputElement).checked = true;
      (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } else if(classSelection === "Monk") {
      (document.getElementById("strength-save") as HTMLInputElement).checked = true;
      (document.getElementById("dexterity-save") as HTMLInputElement).checked = true;
      (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } else if(classSelection === "Paladin") {
      (document.getElementById("wisdom-save") as HTMLInputElement).checked = true;
      (document.getElementById("charisma-save") as HTMLInputElement).checked = true;
      (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(classSelection === "Ranger") {
      (document.getElementById("strength-save") as HTMLInputElement).checked = true;
      (document.getElementById("dexterity-save") as HTMLInputElement).checked = true;
      (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } else if(classSelection === "Rogue") {
      (document.getElementById("dexterity-save") as HTMLInputElement).checked = true;
      (document.getElementById("intelligence-save") as HTMLInputElement).checked = true;
      (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
      (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
    } else if(classSelection === "Sorcerer") {
      (document.getElementById("constitution-save") as HTMLInputElement).checked = true;
      (document.getElementById("charisma-save") as HTMLInputElement).checked = true;
      (document.getElementById("constitution-save-amount") as HTMLInputElement).setAttribute("value", constitutionMod.toString());
      (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(classSelection === "Warlock") {
      (document.getElementById("wisdom-save") as HTMLInputElement).checked = true;
      (document.getElementById("charisma-save") as HTMLInputElement).checked = true;
      (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(classSelection === "Wizard") {
      (document.getElementById("intelligence-save") as HTMLInputElement).checked = true;
      (document.getElementById("wisdom-save") as HTMLInputElement).checked = true;
      (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
      (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
    } 
  }

  resetSavingThrows() {
    (document.getElementById("strength-save") as HTMLInputElement).checked = false;
    (document.getElementById("dexterity-save") as HTMLInputElement).checked = false;
    (document.getElementById("constitution-save") as HTMLInputElement).checked = false;
    (document.getElementById("intelligence-save") as HTMLInputElement).checked = false;
    (document.getElementById("wisdom-save") as HTMLInputElement).checked = false;
    (document.getElementById("charisma-save") as HTMLInputElement).checked = false;
    (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("dexterityMod") as HTMLInputElement).value);
    (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
    (document.getElementById("constitution-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("strengthMod") as HTMLInputElement).value);
    (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("charismaMod") as HTMLInputElement).value);
    (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
  }
}
