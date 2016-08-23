
import {provideRouter, RouterConfig, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {FrontPageComponent} from "./frontpage/FrontPage";
import {ArticleDetails} from "./articles/ArticleDetails";
import {ArticleListComponent} from "./articles/articles";
import {TravelListComponent} from "./travels/travels";
import {TravelDetails} from "./travels/TravelDetails";
import {PartnersComponent} from "./partners/partners";
import {AboutUsComponent} from "./aboutus/aboutus";
import {TermsComponent} from "./terms/terms";
import {MembersComponent} from "./members/members";



// class DeactivateWorkflow implements CanDeactivate<EditorComponent> {
//     canDeactivate(component: EditorComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//         return !component.panel.workflow.dirty || component.panel.workflow.workflow.nodes.length == 0 ||
//             window.confirm("Unsaved workflow changes will be lost. Proceed?");
//     }
// }

const routes:RouterConfig = [
    { path: '', component: FrontPageComponent},
    { path: 'Articles', component: ArticleListComponent },
    { path: 'Articles/:id', component: ArticleDetails},
    { path: 'Travels', component: TravelListComponent},
    { path: 'Travels/:id', component: TravelDetails},
    { path: 'Partners', component: PartnersComponent},
    { path: 'Terms', component: TermsComponent},
    { path: 'About', component: AboutUsComponent},
    { path: 'Members', component: MembersComponent}
];

export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];