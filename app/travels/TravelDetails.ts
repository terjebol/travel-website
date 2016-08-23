import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {TravelRepository} from "./TravelRepository";
import {Travel} from "./TravelRepository";
import {SanitationPipe} from "../SanitationPipe";


@Component({
    selector: 'travel',
    templateUrl: 'app/travels/travel.html',
    providers: [TravelRepository],
    pipes: [SanitationPipe]
})

export class TravelDetails implements OnInit{
    travel:Travel;

    constructor(private route:ActivatedRoute,
                private repo:TravelRepository) {
    }

    ngOnInit() {
        this.route.params.filter(params => !!params['id'])
            .forEach(params => {
                const id = params['id'];
                this.repo.travelDetails
                    .subscribe(updatedTravels => this.travel = updatedTravels
                        .filter(x => x.id == id)[0]);
                this.repo.loadTravelContent();
            });
    }
}
