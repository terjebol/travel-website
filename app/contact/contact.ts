import {Component, ViewChild} from "@angular/core";
import {Contact} from "./contactmodel";
import {NgForm} from "@angular/forms";


@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.html',
})
export class ContactComponent {
    @ViewChild("contactform") form : NgForm;
    contactRequest = new Contact();
    submitted: boolean;

    onSubmit() {
        console.log("Submitted", this.contactRequest);
        this.submitted = true;
        this.form.resetForm();
    }

}


