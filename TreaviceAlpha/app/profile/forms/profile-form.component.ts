import { Component } from "@angular/core";

import { AccountService } from "../../services/account.service";

import { UserData } from "../../models/index";

@Component ({
    selector: "profile-form",
    templateUrl: "app/profile/forms/profile-form.component.html"
})

export class ProfileFormComponent {
    public user: UserData;

    constructor(private accountService: AccountService) {
        this.user = this.accountService.getLastLoggedInUser();
    }
}