import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { BuilderComponent } from './builder/builder.component';
import { MainDescriptionComponent } from './main-description/main-description.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AuthGuard } from './core/auth.guard';
import { MyCampaignComponent } from './my-campaign/my-campaign.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
    { path: 'info', component: InfoComponent, canActivate: [AuthGuard]},
    { path: 'builder', component: BuilderComponent, canActivate: [AuthGuard]},
    { path: 'main', component: MainDescriptionComponent, canActivate: [AuthGuard]},
    { path: 'myCampaign', component: MyCampaignComponent, canActivate: [AuthGuard]},
    { path: 'adminPage', component: AdminPageComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginPageComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [InfoComponent, BuilderComponent, MainDescriptionComponent]