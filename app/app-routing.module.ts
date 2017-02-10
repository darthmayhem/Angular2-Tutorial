/**
 * Created by cb5rp on 1/6/2017.
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
        ], {useHash:true})
    ],
    declarations: [
        WelcomeComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {};