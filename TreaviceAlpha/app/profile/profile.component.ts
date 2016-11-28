import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    templateUrl: "app/profile/profile.component.html"
})

export class ProfileComponent {
    constructor(private router: Router) { }

    public setProfilePage(e: Event) {
        e.preventDefault();
        this.router.navigateByUrl("home/profile/(profile-pages:wants)");
        alert("clicked");
    }
}
