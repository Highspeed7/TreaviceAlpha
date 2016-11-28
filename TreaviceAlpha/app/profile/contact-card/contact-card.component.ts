import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@
Component({
    templateUrl: "app/profile/contact-card/contact-card.component.html"
})

export class ContactCardComponent implements OnInit {

    constructor(private router: Router) { }

    public ngOnInit() {
        this.router.navigateByUrl("home/profile/(profile-pages:wants)");
    }
}
