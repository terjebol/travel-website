import {Component, ComponentMetadataType, OnInit} from "@angular/core";

@Component(<ComponentMetadataType>{
    selector: 'oppdag-malaga',
    templateUrl: 'app/index/index.html',
})

export class IndexComponent implements OnInit{
    private year: number;

    ngOnInit() {
        this.year = new Date().getFullYear();
    }
}


