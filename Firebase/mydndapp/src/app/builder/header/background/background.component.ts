import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.css']
})
export class BackgroundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  backgroundSelector() {
    this.resetSkills();
    let strengthMod = Number((document.getElementById("strengthMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let dexterityMod = Number((document.getElementById("dexterityMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);;
    let intelligenceMod = Number((document.getElementById("intelligenceMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let wisdomMod = Number((document.getElementById("wisdomMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);
    let charismaMod = Number((document.getElementById("charismaMod") as HTMLInputElement).value) + Number((document.getElementById("proficiency") as HTMLInputElement).value);

    let background = (document.getElementById("background") as HTMLInputElement).value;
    if(background === "Acolyte") {
      (document.getElementById("insight") as HTMLInputElement).checked = true;
      (document.getElementById("religion") as HTMLInputElement).checked = true;
      (document.getElementById("insight-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("religion-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
    } else if(background === "Charlatan") {
      (document.getElementById("deception") as HTMLInputElement).checked = true;
      (document.getElementById("sleight of hand") as HTMLInputElement).checked = true;
      (document.getElementById("deception-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
      (document.getElementById("sleight of hand-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } else if(background === "Criminal") {
      (document.getElementById("deception") as HTMLInputElement).checked = true;
      (document.getElementById("stealth") as HTMLInputElement).checked = true;
      (document.getElementById("deception-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
      (document.getElementById("stealth-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } else if(background === "Entertainer") {
      (document.getElementById("acrobatics") as HTMLInputElement).checked = true;
      (document.getElementById("performance") as HTMLInputElement).checked = true;
      (document.getElementById("acrobatics-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
      (document.getElementById("performance-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(background === "Folk Hero") {
      (document.getElementById("animal handling") as HTMLInputElement).checked = true;
      (document.getElementById("survival") as HTMLInputElement).checked = true;
      (document.getElementById("animal handling-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("survival-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
    } else if(background === "Guild Artisan") {
      (document.getElementById("insight") as HTMLInputElement).checked = true;
      (document.getElementById("persuasion") as HTMLInputElement).checked = true;
      (document.getElementById("insight-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("persuasion-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(background === "Hermit") {
      (document.getElementById("medicine") as HTMLInputElement).checked = true;
      (document.getElementById("religion") as HTMLInputElement).checked = true;
      (document.getElementById("medicine-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
      (document.getElementById("religion-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
    } else if(background === "Noble") {
      (document.getElementById("history") as HTMLInputElement).checked = true;
      (document.getElementById("persuasion") as HTMLInputElement).checked = true;
      (document.getElementById("history-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
      (document.getElementById("persuasion-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(background === "Outlander") {
      (document.getElementById("athletics") as HTMLInputElement).checked = true;
      (document.getElementById("survival") as HTMLInputElement).checked = true;
      (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("survival-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
    } else if(background === "Sage") {
      (document.getElementById("arcana") as HTMLInputElement).checked = true;
      (document.getElementById("history") as HTMLInputElement).checked = true;
      (document.getElementById("arcana-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
      (document.getElementById("history-amount") as HTMLInputElement).setAttribute("value", intelligenceMod.toString());
    } else if(background === "Sailor") {
      (document.getElementById("athletics") as HTMLInputElement).checked = true;
      (document.getElementById("perception") as HTMLInputElement).checked = true;
      (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("perception-amount") as HTMLInputElement).setAttribute("value", wisdomMod.toString());
    } else if(background === "Soldier") {
      (document.getElementById("athletics") as HTMLInputElement).checked = true;
      (document.getElementById("intimidation") as HTMLInputElement).checked = true;
      (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", strengthMod.toString());
      (document.getElementById("intimidation-amount") as HTMLInputElement).setAttribute("value", charismaMod.toString());
    } else if(background === "Urchin") {
      (document.getElementById("sleight of hand") as HTMLInputElement).checked = true;
      (document.getElementById("stealth") as HTMLInputElement).checked = true;
      (document.getElementById("sleight of hand-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
      (document.getElementById("stealth-amount") as HTMLInputElement).setAttribute("value", dexterityMod.toString());
    } 
  }
  resetSkills() {
    (document.getElementById("acrobatics") as HTMLInputElement).checked = false;
    (document.getElementById("animal handling") as HTMLInputElement).checked = false;
    (document.getElementById("arcana") as HTMLInputElement).checked = false;
    (document.getElementById("athletics") as HTMLInputElement).checked = false;
    (document.getElementById("deception") as HTMLInputElement).checked = false;
    (document.getElementById("history") as HTMLInputElement).checked = false;
    (document.getElementById("insight") as HTMLInputElement).checked = false;
    (document.getElementById("intimidation") as HTMLInputElement).checked = false;
    (document.getElementById("investigation") as HTMLInputElement).checked = false;
    (document.getElementById("medicine") as HTMLInputElement).checked = false;
    (document.getElementById("nature") as HTMLInputElement).checked = false;
    (document.getElementById("perception") as HTMLInputElement).checked = false;
    (document.getElementById("performance") as HTMLInputElement).checked = false;
    (document.getElementById("persuasion") as HTMLInputElement).checked = false;
    (document.getElementById("religion") as HTMLInputElement).checked = false;
    (document.getElementById("sleight of hand") as HTMLInputElement).checked = false;
    (document.getElementById("stealth") as HTMLInputElement).checked = false;
    (document.getElementById("survival") as HTMLInputElement).checked = false;
    (document.getElementById("acrobatics-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("dexterityMod") as HTMLInputElement).value);
    (document.getElementById("animal handling-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
    (document.getElementById("arcana-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("strengthMod") as HTMLInputElement).value);
    (document.getElementById("deception-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("charismaMod") as HTMLInputElement).value);
    (document.getElementById("history-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("insight-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
    (document.getElementById("intimidation-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("charismaMod") as HTMLInputElement).value);
    (document.getElementById("investigation-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("medicine-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
    (document.getElementById("nature-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("perception-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
    (document.getElementById("performance-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("charismaMod") as HTMLInputElement).value);
    (document.getElementById("persuasion-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("charismaMod") as HTMLInputElement).value);
    (document.getElementById("religion-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("intelligenceMod") as HTMLInputElement).value);
    (document.getElementById("sleight of hand-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("dexterityMod") as HTMLInputElement).value);
    (document.getElementById("stealth-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("dexterityMod") as HTMLInputElement).value);
    (document.getElementById("survival-amount") as HTMLInputElement).setAttribute("value", (document.getElementById("wisdomMod") as HTMLInputElement).value);
  }
}
