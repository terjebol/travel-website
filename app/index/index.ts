import {ROUTER_DIRECTIVES} from "@angular/router";
import {Component, OnInit} from "@angular/core";
import {MenuComponent} from "../menu/menu";

@Component({
    selector: 'oppdag-malaga',
    templateUrl: 'app/index/index.html',
    directives: [MenuComponent,ROUTER_DIRECTIVES],
})

export class IndexComponent implements OnInit{
    private year: number;

    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}


