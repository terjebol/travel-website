import {Component} from "@angular/core";

import {Router} from "@angular/router";
import {TravelRepository} from "./TravelRepository";
import {Travel} from "./TravelRepository";
import {SanitationPipe} from "../SanitationPipe";

@Component({
    selector: 'group-travel',
    templateUrl: 'app/travels/groups.html',
    // providers: [TravelRepository],
    // pipes: [SanitationPipe]
})

export class GroupTravelComponent {
    
}
