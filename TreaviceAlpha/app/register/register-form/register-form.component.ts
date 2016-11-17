import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

import { RegisterFormValidators } from "./validators/register-form-validators";
// import { RegisterFormModel } from "../../models/index";

@Component({
    selector: "register-form",
    templateUrl: "app/register/register-form/register-form.component.html"
})

export class RegisterFormComponent {

    private signupForm: FormGroup;
    private email: AbstractControl;
    private passwords: AbstractControl;

    constructor(fb: FormBuilder) {
        this.signupForm = fb.group({
            email: ["", Validators.required],
            passwords: fb.group({
                password: ["", Validators.required, Validators.pattern],
                confirmPassword: ["", Validators.compose([
                    Validators.required,
                    RegisterFormValidators.cannotContainSpace
                ])]
            })
        });

        // TODO: find better way to avoid tslint error
        this.email = this.signupForm.controls["email"]; // tslint:disable-line 
        // TODO: find better way to avoid tslint error
        this.passwords = this.signupForm.controls["passwords"]; // tslint:disable-line 
    }

    public onSubmit(form) {
        console.log(form); // tslint:disable-line
    }
}
