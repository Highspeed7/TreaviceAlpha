import { Component, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import { Router } from "@angular/router";
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
        // TODO: remove after phone number validation implemented
        if (this.profileForm.value.phonePre && this.profileForm.value.phoneArea && this.profileForm.value.phoneSuff) {
            this.profileForm.value.phone = this.assemblePhoneNumber();
        } else {
            this.profileForm.value.phone = "";
        }
        this.accountService.updateProfile(this.profileForm.value, this.user.email, token)
            .subscribe((response: Response) => {
                if (response.status === 200) {
                    var userDataObj = {
                        email: this.profileForm.value.email,
                        profile: this.profileForm.value
                    }
                    this.accountService.setLastLoggedInUser(userDataObj);
                    location.reload();
                }
            }, (err: any) => {
                // Hand off to error handler
                if (err.status === 401) {
                    alert("You must first login");
                }
            });
    }

    private assemblePhoneNumber() {
        return `${this.profileForm.value.phoneArea}${this.profileForm.value.phonePre}${this.profileForm.value.phoneSuff}`;
    }

    private initProfileFields() {
        return {
            firstName: this.initNamesModel("firstName"),
            lastName: this.initNamesModel("lastName"),
            street: this.initStreetModel(),
            city: this.initCityModel(),
            state: this.initStateModel(),
            zipCode: this.initZipCode(),
            phoneArea: this.initPhone(0),
            phonePre: this.initPhone(1),
            phoneSuff: this.initPhone(2)
        };
    }

    private initZipCode() {
        // TODO: Add zipcode validation
        return [this.user.profile.zipCode];
    }

    private initPhone(part: number): Array<string> {
        // TODO: Add phone number validation
        let retVal: Array<string> = [];
        if (this.user.profile.phone && this.user.profile.phone !== null) {
            switch (part) {
                case 0:
                    retVal = [this.user.profile.phone.substr(0, 3)];
                    break;
                case 1:
                    retVal = [this.user.profile.phone.substr(3, 3)];
                    break;
                case 2:
                    retVal = [this.user.profile.phone.substr(6, 4)];
                    break;
                default:
                    // Do nothing
                }
        }
            
        return retVal;
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
