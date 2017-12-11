import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../../services/account.service";
import { ObjectHelper } from "../../services/helpers/objectHelper.service";

import { UserDto } from "../../dtos/userDto";
import { UserData } from "../../models/index";
import { WindowRef } from "../../services/windowRef.service";

import { Observable, Subject, Subscription } from "rxjs";

@Component({
    selector: "login-form",
    templateUrl: "app/login/login-form/login-form.component.html"
})

export class LoginFormComponent implements OnInit {

    private loginForm: FormGroup;
    private window: any;
    public _coords = new Subject<any>();
    public coords$ = this._coords.asObservable();

    constructor(
        private fb: FormBuilder,
        private accountService: AccountService,
        private router: Router,
        private helpers: ObjectHelper,
        private winRef: WindowRef
    ) {
        this.window = this.winRef.nativeWindow;
    }

    public ngOnInit() {
        // we will initialize our form model here
        this.loginForm = this.fb.group({
            email: this.initEmailModel(),
            password: this.initPasswordModel()
        });
    }

    public initEmailModel() {
        return ["", [Validators.required]];
    }

    public initPasswordModel() {
        const passRegex = `^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])(?=.*[0-9])[A-Za-z0-9$@$!%*#?&]{8,}$`;

        return ["", Validators.compose([Validators.required, Validators.pattern(passRegex)])];
    }

    public login(e: Event, formData: any, isValid: boolean) {
        e.preventDefault();
        // Obtain validation token
        const token = this.getVerifyToken();

        let data = new UserDto();

        data.email = formData.email;
        data.password = formData.password;

        this.setProfileCoordinates();

        this.coords$.subscribe((coords: any) => {
            data.loginLat = coords.coords.latitude;
            data.loginLong = coords.coords.longitude;

            this.accountService.login(data, token)
                .then((result: UserData) => {
                    this.setLoggedInUserdata(result);
                })
                .catch(() => {
                    alert("Login failed");
                });
        });
    }

    public setLoggedInUserdata(user: UserData): void {
        let profileData: any;
        // Get the profile data after login
        this.accountService.getProfileData(user)
            .subscribe(r => {
                profileData = r;

                // Map newly obtained data to the user object
                user.profile = profileData[0];

                // Set the userData to localStorage via account service.
                this.accountService.setLastLoggedInUser(user)
                    .then((result: boolean) =>
                    {
                        if (result) {
                            this.router.navigate([""]);
                        }
                    });
            });
    }

    public getVerifyToken(): string {

        // Get the verify token
        const tokenElem = <HTMLElement> document.querySelectorAll("div[ncg-request-verification-token]")[0];
        const tokenVal = tokenElem.getAttribute("ncg-request-verification-token");

        return tokenVal;
    }

    private setProfileCoordinates() {
        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.outputPosition, (err) => { console.warn(err.message); });
        } else {
            // Default to user's home location
            alert("Unable to locate user");
        }
    }

    public outputPosition = (position: any) => {
        alert("hello");
        this._coords.next(position);
    }

    public 
}
