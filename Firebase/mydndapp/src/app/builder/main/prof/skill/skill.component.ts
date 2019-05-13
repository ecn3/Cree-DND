import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  setAcrobatics() {
    let bonus = Number((document.getElementById("dexterityMod") as HTMLInputElement).value);
    if ((document.getElementById("acrobatics") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("acrobatics-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setAnimalHandling() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("animal handling") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("animal handling-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setArcana() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("arcana") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("arcana-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setAthletics() {
    let bonus = Number((document.getElementById("strengthMod") as HTMLInputElement).value);
    if ((document.getElementById("athletics") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setDeception() {
    let bonus = Number((document.getElementById("charismaMod") as HTMLInputElement).value);
    if ((document.getElementById("deception") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("deception-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setHistory() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("history") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("history-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setInsight() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("insight") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("insight-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setIntimidation() {
    let bonus = Number((document.getElementById("charismaMod") as HTMLInputElement).value);
    if ((document.getElementById("intimidation") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("intimidation-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setInvestigation() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("investigation") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("investigation-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setMedicine() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("medicine") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("medicine-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setNature() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("nature") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("nature-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setPerception() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("perception") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("perception-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setPerformance() {
    let bonus = Number((document.getElementById("charismaMod") as HTMLInputElement).value);
    if ((document.getElementById("performance") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("performance-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setPersuasion() {
    let bonus = Number((document.getElementById("charismaMod") as HTMLInputElement).value);
    if ((document.getElementById("persuasion") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("persuasion-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setReligion() {
    let bonus = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value);
    if ((document.getElementById("religion") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("religion-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setSleightOfHand() {
    let bonus = Number((document.getElementById("dexterityMod") as HTMLInputElement).value);
    if ((document.getElementById("sleight of hand") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("sleight of hand-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setStealth() {
    let bonus = Number((document.getElementById("dexterityMod") as HTMLInputElement).value);
    if ((document.getElementById("stealth") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("stealth-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
  setSurvival() {
    let bonus = Number((document.getElementById("wisdomMod") as HTMLInputElement).value);
    if ((document.getElementById("survival") as HTMLInputElement).checked) {
      bonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("survival-amount") as HTMLInputElement).setAttribute("value", bonus.toString());
  }
}