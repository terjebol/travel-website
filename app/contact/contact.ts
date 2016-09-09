import {Component} from "@angular/core";
import {Contact} from "./contactmodel";

@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.html',
})
export class ContactComponent {
    contactRequest = new Contact("din@epost.no","Din beskjed");
    submitted: boolean;

    onSubmit() {
        console.log("Submitted");
        this.submitted = true;
    }

}


