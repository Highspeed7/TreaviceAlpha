import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "../services/account.service";

@Component({
    templateUrl: "app/landing/landing.component.html"
})

export class LandingComponent implements OnInit {
    constructor(private accountService: AccountService, private router: Router) {
        accountService.init();
    }
    public ngOnInit() {
        this.accountService.isLoggedIn()
            .then((answer) => {
                if (answer) {
                    this.router.navigate(["home"]);
                }
            });
    }
}
