import { Component } from "@angular/core";
import {Router} from "@angular/router";

import { AccountService } from "../services/account.service";
import { UserData } from "../models/index";

@Component({
    templateUrl: "app/home/home.component.html"
})

export class HomeComponent {
    public userInfo: UserData;

    constructor(private router: Router, private accountService: AccountService) {
        if (accountService.getLastLoggedInUser() !== null) {
            this.userInfo = accountService.getLastLoggedInUser();
            console.log(this.userInfo);
        }
    }
}
