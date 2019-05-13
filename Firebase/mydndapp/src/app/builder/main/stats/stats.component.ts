import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  setStrengthMod() {
    let strength = Number((document.getElementById("strengthStat") as HTMLInputElement).value);
    let mod = Math.floor((strength - 10) / 2).toString();
    let saveBonus = mod;
    let athleticsBonus = mod;
    (document.getElementById("strengthMod") as HTMLInputElement).setAttribute("value", mod);

    if((document.getElementById("strength-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("strength-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);
    
    if((document.getElementById("athletics") as HTMLInputElement).checked) {
      athleticsBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("athletics-amount") as HTMLInputElement).setAttribute("value", athleticsBonus);
    
  }
  setDexterityMod() {
    let dexterity = Number((document.getElementById("dexterityStat") as HTMLInputElement).value);
    let mod = Math.floor((dexterity - 10) / 2).toString();
    let saveBonus = mod;
    let acrobaticsBonus = mod;
    let slieghtOfHandBonus = mod;
    let stealthBonus = mod;

    (document.getElementById("dexterityMod") as HTMLInputElement).setAttribute("value", mod);
    (document.getElementById("initiative") as HTMLInputElement).setAttribute("value", mod);

    (document.getElementById("dexterityMod") as HTMLInputElement).setAttribute("value", mod);
    if((document.getElementById("dexterity-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("dexterity-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);

    if((document.getElementById("acrobatics") as HTMLInputElement).checked) {
      acrobaticsBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("acrobatics-amount") as HTMLInputElement).setAttribute("value", acrobaticsBonus);

    if((document.getElementById("sleight of hand") as HTMLInputElement).checked) {
      slieghtOfHandBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("sleight of hand-amount") as HTMLInputElement).setAttribute("value", slieghtOfHandBonus);
    if((document.getElementById("stealth") as HTMLInputElement).checked) {
      stealthBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("stealth-amount") as HTMLInputElement).setAttribute("value", stealthBonus);
  }
  setConstitutionMod() {
    let constitution = Number((document.getElementById("constitutionStat") as HTMLInputElement).value);
    let mod = Math.floor((constitution - 10) / 2).toString();
    let saveBonus = mod;

    (document.getElementById("constitutionMod") as HTMLInputElement).setAttribute("value", mod);

    if((document.getElementById("constitution-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("constitution-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);
  }
  setIntelligenceMod() {
    let intelligence = Number((document.getElementById("intelligenceStat") as HTMLInputElement).value);
    let mod = Math.floor((intelligence - 10) / 2).toString();
    let saveBonus = mod;
    let arcanaBonus = mod;
    let historyBonus = mod;
    let investigationBonus = mod;
    let natureBonus = mod;
    let religionBonus = mod;

    (document.getElementById("intelligenceMod") as HTMLInputElement).setAttribute("value", mod);

    if((document.getElementById("intelligence-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("intelligence-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);

    if((document.getElementById("arcana") as HTMLInputElement).checked) {
      arcanaBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("arcana-amount") as HTMLInputElement).setAttribute("value", arcanaBonus);

    if((document.getElementById("history") as HTMLInputElement).checked) {
      historyBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("history-amount") as HTMLInputElement).setAttribute("value", historyBonus);

    if((document.getElementById("investigation") as HTMLInputElement).checked) {
      investigationBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("investigation-amount") as HTMLInputElement).setAttribute("value", investigationBonus);

    if((document.getElementById("nature") as HTMLInputElement).checked) {
      natureBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("nature-amount") as HTMLInputElement).setAttribute("value", natureBonus);

    if((document.getElementById("religion") as HTMLInputElement).checked) {
      religionBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("religion-amount") as HTMLInputElement).setAttribute("value", religionBonus);
  }
  setWisdomMod() {
    let wisdom = Number((document.getElementById("wisdomStat") as HTMLInputElement).value);
    let mod = Math.floor((wisdom - 10) / 2).toString();
    let saveBonus = mod;
    let animalHandlingBonus = mod;
    let insightBonus = mod;
    let medicineBonus = mod;
    let perceptionBonus = mod;
    let survivalBonus = mod;

    (document.getElementById("wisdomMod") as HTMLInputElement).setAttribute("value", mod);

    if((document.getElementById("wisdom-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }

    (document.getElementById("wisdom-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);

    if((document.getElementById("animal handling") as HTMLInputElement).checked) {
      animalHandlingBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("animal handling-amount") as HTMLInputElement).setAttribute("value", animalHandlingBonus);

    if((document.getElementById("insight") as HTMLInputElement).checked) {
      insightBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("insight-amount") as HTMLInputElement).setAttribute("value", insightBonus);

    if((document.getElementById("medicine") as HTMLInputElement).checked) {
      medicineBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("medicine-amount") as HTMLInputElement).setAttribute("value", medicineBonus);

    if((document.getElementById("perception") as HTMLInputElement).checked) {
      perceptionBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("perception-amount") as HTMLInputElement).setAttribute("value", perceptionBonus);

    if((document.getElementById("survival") as HTMLInputElement).checked) {
      survivalBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("survival-amount") as HTMLInputElement).setAttribute("value", survivalBonus);
  }
  setCharismaMod() {
    let charisma = Number((document.getElementById("charismaStat") as HTMLInputElement).value);
    let mod = Math.floor((charisma - 10) / 2).toString();
    let saveBonus = mod;
    let deceptionBonus = mod;
    let intimidationBonus = mod;
    let performanceBonus = mod;
    let persuasionBonus = mod;

    (document.getElementById("charismaMod") as HTMLInputElement).setAttribute("value", mod);

    if((document.getElementById("charisma-save") as HTMLInputElement).checked) {
      saveBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("charisma-save-amount") as HTMLInputElement).setAttribute("value", saveBonus);

    if((document.getElementById("deception") as HTMLInputElement).checked) {
      deceptionBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("deception-amount") as HTMLInputElement).setAttribute("value", deceptionBonus);

    if((document.getElementById("intimidation") as HTMLInputElement).checked) {
      intimidationBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("intimidation-amount") as HTMLInputElement).setAttribute("value", intimidationBonus);

    if((document.getElementById("performance") as HTMLInputElement).checked) {
      performanceBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("performance-amount") as HTMLInputElement).setAttribute("value", performanceBonus);

    if((document.getElementById("persuasion") as HTMLInputElement).checked) {
      persuasionBonus += Number((document.getElementById("proficiency") as HTMLInputElement).value);
    }
    (document.getElementById("persuasion-amount") as HTMLInputElement).setAttribute("value", persuasionBonus);
  }
}
