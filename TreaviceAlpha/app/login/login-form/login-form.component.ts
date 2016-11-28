import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { AccountService } from "../../services/account.service";

import { UserDto } from "../../dtos/userDto";

@Component({
    selector: "login-form",
    templateUrl: "app/login/login-form/login-form.component.html"
})

export class LoginFormComponent implements OnInit {

    private loginForm: FormGroup;

    constructor(private fb: FormBuilder, private accountService: AccountService, private router: Router) { }

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

        this.accountService.login(data, token)
            .then(result => {
                // TODO: Set email to previouslyLoggedIn Object on localstorage
                this.accountService.setLastLoggedInUser(result);
                this.router.navigate([""]);
            })
            .catch(() => {
                alert("Login failed");
            });
    }

    public getVerifyToken(): string {

        // Get the verify token
        const tokenElem = <HTMLElement> document.querySelectorAll("div[ncg-request-verification-token]")[0];
        const tokenVal = tokenElem.getAttribute("ncg-request-verification-token");

        return tokenVal;
    }
}
