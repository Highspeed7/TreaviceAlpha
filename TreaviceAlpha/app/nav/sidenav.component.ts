import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

@Component({
    selector: "nav[side-nav]",
    templateUrl: "app/nav/sidenav.component.html"
})

export class SideNavComponent implements OnInit {
    public loggedIn = false;

    constructor(private router: Router, private accountService: AccountService) { }

    public ngOnInit() {
        this.accountService.isLoggedIn()
            .then((answer) => { this.loggedIn = answer });
    }
}
