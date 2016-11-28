import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { UserData } from "../../models/index";
import { AccountService } from "../../services/account.service";

@Component({
    templateUrl: "app/home/home-main/home-main.component.html"
})

export class HomeMainComponent {
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
