import {Component} from "@angular/core";
import {Auth} from "../auth/auth.service";


@Component({
    selector: 'nav-menu',
    templateUrl: 'app/menu/menu.html',
    providers: [Auth]

})

export class MenuComponent {

    constructor(private auth: Auth){
    }
}