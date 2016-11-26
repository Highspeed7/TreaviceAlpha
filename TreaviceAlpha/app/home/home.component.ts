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
        this.userInfo = new UserData();
        if (accountService.getLastLoggedInUser() !== null) {
            this.userInfo = accountService.getLastLoggedInUser();
        } else {
            this.userInfo.email = "Guest";
        }
    }
}
