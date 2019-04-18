import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoComponent } from './info/info.component';
import { BuilderComponent } from './builder/builder.component';
import { MainDescriptionComponent } from './main-description/main-description.component';

const routes: Routes = [
    { path: 'info', component: InfoComponent},
    { path: 'builder', component: BuilderComponent},
    { path: 'main', component: MainDescriptionComponent},
    { path: '**', redirectTo: '/main'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

export const routingComponents = [InfoComponent, BuilderComponent, MainDescriptionComponent]