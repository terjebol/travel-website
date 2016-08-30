import { NgModule, NgModuleMetadataType }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { AUTH_PROVIDERS } from 'angular2-jwt';
import {provideRouter, Routes, RouterModule} from '@angular/router';

import { IndexComponent }  from './index/index';
import {FrontPageComponent} from "./frontpage/FrontPage";
import {TravelListComponent} from "./travels/travels";
import {TravelDetails} from "./travels/TravelDetails";
import {ArticleDetails} from "./articles/ArticleDetails";
import {ArticleListComponent} from "./articles/articles";
import {PartnersComponent} from "./partners/partners";
import {AboutUsComponent} from "./aboutus/aboutus";
import {MembersComponent} from "./members/members";
import {ContactComponent} from "./contact/contact";
import {TermsComponent} from "./terms/terms";
import {GroupTravelComponent} from "./travels/groups.component";

const routes:Routes = <Routes>[
    {path: '', component: FrontPageComponent},
    {path: 'Articles', component: ArticleListComponent},
    {path: 'Articles/:id', component: ArticleDetails},
    {path: 'Travels', component: TravelListComponent},
    {path: 'Travels/Groups', component: GroupTravelComponent},
    {path: 'Travels/:id', component: TravelDetails},
    {path: 'Partners', component: PartnersComponent},
    {path: 'Terms', component: TermsComponent},
    {path: 'About', component: AboutUsComponent},
    {path: 'Members', component: MembersComponent},
    {path: 'Contact', component: ContactComponent}
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];
export const routing = RouterModule.forRoot(routes);

@NgModule(<NgModuleMetadataType>{
    imports: [BrowserModule, RouterModule, FormsModule, HttpModule],
    declarations: [
        IndexComponent,
        FrontPageComponent,
        ArticleListComponent,
        ArticleDetails,
        GroupTravelComponent,
        TravelListComponent,
        TravelDetails,
        PartnersComponent,
        AboutUsComponent,
        MembersComponent,
        ContactComponent,
        TermsComponent
    ],
    bootstrap: [IndexComponent],
    providers: [APP_ROUTER_PROVIDERS, AUTH_PROVIDERS]
})



export class MainModule { }

