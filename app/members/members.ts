import {Component} from "@angular/core";
import {Auth} from "../auth/auth.service";

@Component({
    selector: 'members',
    templateUrl: 'app/members/members.html',
    providers: [Auth]
})
export class MembersComponent {
    constructor(private auth: Auth) {}
}

