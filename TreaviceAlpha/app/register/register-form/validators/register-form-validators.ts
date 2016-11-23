import {FormGroup} from "@angular/forms";

export class RegisterFormValidators {
    public static passwordMatch(form: FormGroup) {
        return form.get("password").value === form.get("confirmPassword").value ? null : { "mismatch": true };
    }
}
