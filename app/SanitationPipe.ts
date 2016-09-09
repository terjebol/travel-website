import {DomSanitizer} from '@angular/platform-browser';
import {Pipe} from "@angular/core";

@Pipe({name: 'safe'})
export class SanitationPipe {
    constructor(private sanitizer:DomSanitizer){
        this.sanitizer = sanitizer;
    }

    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
