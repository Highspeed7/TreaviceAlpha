import { Component, OnInit } from "@angular/core";
import { Response } from "@angular/http";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { RegisterFormValidators } from "./validators/register-form-validators";

import { AccountService } from "../../services/account.service";

import { UserDto } from "../../dtos/userDto";
// import { RegisterFormModel } from "../../models/index";

@Component({
    selector: "register-form",
    templateUrl: "app/register/register-form/register-form.component.html"
})

export class RegisterFormComponent implements OnInit {

    private signupForm: FormGroup;

    constructor(private fb: FormBuilder, private accountService: AccountService) {}

    public ngOnInit() {
        // we will initialize our form model here
        this.signupForm = this.fb.group({
            email: this.initEmailModel(),
            passwords: this.initPasswordFieldsGroup()
        });
    }

    public initPasswordFieldsGroup() {
        const group = this.fb.group(this.initPasswordModel(), { validator: RegisterFormValidators.passwordMatch });

        return group;
    }

    public initEmailModel() {
        return ["", [Validators.required]];
    }

    public initPasswordModel() {
        const passRegex = `^(?=.*[A-Za-z])(?=.*[$@$!%*#?&])(?=.*[0-9])[A-Za-z0-9$@$!%*#?&]{8,}$`;

        const model = {
            password: ["", [Validators.required, Validators.pattern(passRegex)]],
            confirmPassword: ["", [Validators.required]]
        };

        return model;
    }

    public save(e: Event, formData: any, isValid: boolean) {
        e.preventDefault();
        // Obtain validation token
        const token = this.getVerifyToken();

        let data = new UserDto();

        data.email = formData.email;
        data.password = formData.passwords.password;

        this.accountService.registerUser(data, token)
            .then((res) => {
                if (res.status === 200) {
                    alert("Save successful");
                }
            })
            .catch((err: Response) => {
                alert("The server says: " + err.text());
            });
        return false;
    }

    public getVerifyToken(): string {

        // Get the verify token
        const tokenElem = <HTMLElement> document.querySelectorAll("div[ncg-request-verification-token]")[0];
        const tokenVal = tokenElem.getAttribute("ncg-request-verification-token");

        return tokenVal;
    }
}
