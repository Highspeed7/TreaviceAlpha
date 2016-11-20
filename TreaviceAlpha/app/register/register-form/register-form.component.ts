import { Component, OnInit, ElementRef } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { RegisterFormValidators } from "./validators/register-form-validators";
// import { RegisterFormModel } from "../../models/index";

@Component({
    selector: "register-form",
    templateUrl: "app/register/register-form/register-form.component.html"
})

export class RegisterFormComponent implements OnInit {

    private signupForm: FormGroup;

    constructor(private fb: FormBuilder, private el: ElementRef) {}

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

    public save(formData: any, isValid: boolean) {
        // Obtain validation token
        this.getVerifyToken();

        alert("saved!");
    }

    public getVerifyToken() {
        console.log(this.el.nativeElement); // tslint:disable-line
    }
}
