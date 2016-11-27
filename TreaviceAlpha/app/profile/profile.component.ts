import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    templateUrl: "app/profile/profile.component.html"
})

export class ProfileComponent {
    constructor(private router: Router) { }

    public clicking() {
        this.router.navigateByUrl("/profile(testing:testing)");
    }
}
