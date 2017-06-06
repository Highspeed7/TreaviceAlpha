import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router"
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AccountService } from "../../services/account.service";

import { UserData, GeoStateModel } from "../../models/index";

@Component ({
    selector: "profile-form",
    templateUrl: "app/profile/forms/profile-form.component.html"
})

export class ProfileFormComponent implements OnInit {
    
    public user: UserData;
    public states: GeoStateModel[] = [
        {
            name: "Washington",
            abbrv: "WA"
        },
        {
            name: "Oregon",
            abbrv: "OR"
        }
    ];

    private profileForm: FormGroup;

    constructor(
        private accountService: AccountService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.user = this.accountService.getLastLoggedInUser();
    }

    public ngOnInit() {
        this.profileForm = this.fb.group(this.initProfileFields());
    }

    public saveProfile() {
        let token = this.getVerifyToken();
        this.accountService.updateProfile(this.profileForm.value, this.user.email, token)
            .subscribe((response: boolean) => {
                if (response) {
                    location.reload();
                }
            });
    }

    private initProfileFields() {
        return {
            firstName: this.initNamesModel("firstName"),
            lastName: this.initNamesModel("lastName"),
            street: this.initStreetModel(),
            city: this.initCityModel(),
            state: this.initStateModel()
    };
    }

    private initNamesModel(val: string) {
        return [this.user.profile[val]];
    }

    private initStreetModel() {
        // TODO: Do address lookup
        return [this.user.profile.street];
    }

    private initCityModel() {
        return [this.user.profile.city];
    }

    private initStateModel() {
        return [this.user.profile.state];
    }

    private getVerifyToken(): string {

        // Get the verify token
        const tokenElem = <HTMLElement>document.querySelectorAll("div[ncg-request-verification-token]")[0];
        const tokenVal = tokenElem.getAttribute("ncg-request-verification-token");

        return tokenVal;
    }
}
