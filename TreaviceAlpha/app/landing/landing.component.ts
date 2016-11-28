import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "../services/account.service";

@Component({
    templateUrl: "app/landing/landing.component.html"
})

export class LandingComponent implements OnInit {
    constructor(private accountService: AccountService, private router: Router) {}

    public ngOnInit() {
         this.accountService.isLoggedIn()
            .subscribe((answer) => {
                if (answer) {
                    this.accountService.loggedIn = answer;
                    this.router.navigate(["home/main"]);
                }
                this.accountService.loggedIn = answer;
            });
    }
}
