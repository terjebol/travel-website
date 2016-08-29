import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Auth} from "../auth/auth.service";


@Component({
    selector: 'nav-menu',
    templateUrl: 'app/menu/menu.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [Auth]

})

export class MenuComponent {

    constructor(private auth: Auth){
    }
}