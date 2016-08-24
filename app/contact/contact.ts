import {Component} from "@angular/core";
import {Contact} from "./contactmodel";
import {FORM_DIRECTIVES} from "@angular/forms";


@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.html',
    directives: [FORM_DIRECTIVES]

})
export class ContactComponent {
    contactRequest = new Contact("din@epost.no","Din beskjed");

    onSubmit() {
        console.log("Submitted");
    }

}


