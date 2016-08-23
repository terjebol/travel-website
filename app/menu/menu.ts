import {Component} from "@angular/core";
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";


@Component({
    selector: 'nav-menu',
    templateUrl: 'app/menu/menu.html',
    directives: [ROUTER_DIRECTIVES]

})

export class MenuComponent {

    constructor(private route: ActivatedRoute){
    }

    isRouteActive(route: String) {
        //console.log(this.route.snapshot);
        return false;
        // return this.router.isRouteActive(this.router.generate([route]));
    }
}