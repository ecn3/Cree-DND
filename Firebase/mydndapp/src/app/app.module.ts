import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './builder/header/header/header.component';
import { NameComponent } from './builder/header/name/name.component';
import { RaceComponent } from './builder/header/race/race.component';
import { BackgroundComponent } from './builder/header/background/background.component';
import { ClassComponent } from './builder/header/class/class.component';
import { LevelComponent } from './builder/header/level/level.component';
import { RaceTableComponent } from './info/racetableComponents/race-table/race-table.component'
import { RaceRowSubraceComponent } from './info/racetableComponents/race-row-subrace/race-row-subrace.component';
import { RaceRowRaceComponent } from './info/racetableComponents/race-row-race/race-row-race.component';
import { RaceRowPublicationComponent } from './info/racetableComponents/race-row-publication/race-row-publication.component';
import { RaceRowPageComponent } from './info/racetableComponents/race-row-page/race-row-page.component';
import { RaceRowImageComponent } from './info/racetableComponents/race-row-image/race-row-image.component';

//import { AuthGuard } from './core/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthGuard } from './core/auth.guard';
import { StatsComponent } from './builder/main/stats/stats.component';
import { MainComponent } from './builder/main/main/main.component';
import { ProfComponent } from './builder/main/prof/prof/prof.component';
import { SaveComponent } from './builder/main/prof/save/save.component';
import { SkillComponent } from './builder/main/prof/skill/skill.component';
import { CombatComponent } from './builder/main/combat/combat.component';
import { AttacksComponent } from './builder/main/attacks/attacks.component';
import { EquipmentComponent } from './builder/main/equipment/equipment.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MyCampaignComponent } from './my-campaign/my-campaign.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    NameComponent,
    RaceComponent,
    BackgroundComponent,
    ClassComponent,
    LevelComponent,
    RaceTableComponent,
    RaceRowSubraceComponent,
    RaceRowRaceComponent,
    RaceRowPublicationComponent,
    RaceRowPageComponent,
    RaceRowImageComponent,
    LoginPageComponent,
    StatsComponent,
    MainComponent,
    ProfComponent,
    SaveComponent,
    SkillComponent,
    CombatComponent,
    AttacksComponent,
    EquipmentComponent,
    NavbarComponent,
    MyCampaignComponent,
    AdminPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBmshXCy1iJ12PMnw08LVMPgxbSTh_vcd0",
      authDomain: "cree-dnd.firebaseapp.com",
      databaseURL: "https://cree-dnd.firebaseio.com",
      projectId: "cree-dnd",
      storageBucket: "cree-dnd.appspot.com",
      messagingSenderId: "687824902672"
    }),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
