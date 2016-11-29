import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserData } from "../../models/index";

import { AccountService } from "../../services/account.service";

@Component({
    templateUrl: "app/profile/contact-card/contact-card.component.html"
})

export class ContactCardComponent implements OnInit {
    public user: UserData;

    constructor(private router: Router, private accountService: AccountService) { }

    public ngOnInit() {
        this.router.navigateByUrl("home/profile/(profile-pages:wants)");
        this.user = this.accountService.getLastLoggedInUser();
    }
}
