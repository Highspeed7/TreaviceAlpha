import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { AccountService } from "../services/account.service";

@Component({
    selector: "nav[side-nav]",
    templateUrl: "app/nav/sidenav.component.html"
})

export class SideNavComponent implements OnInit {
    public loggedIn: boolean;

    constructor(private router: Router, private accountService: AccountService, @Inject(DOCUMENT) private document: any) { }

    public ngOnInit() {
        this.accountService.isLoggedIn()
            .subscribe((result) => {
                this.loggedIn = result;
            });
    }

    // TODO: Componentialize logout
    public logout(event: Event) {
        event.preventDefault();
        this.accountService.logout()
            .subscribe(r => {
                this.document.location = this.document.location.origin;
            });
    }
}
