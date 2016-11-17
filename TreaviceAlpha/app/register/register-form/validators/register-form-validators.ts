import { FormControl } from "@angular/forms";

export class RegisterFormValidators {
    public static cannotContainSpace(control: FormControl) {
        if (control.value.indexOf(" ") >= 0) {
            return {
                cannotContainSpace: true
            };
        } else {
            return null;
        }
    }
}
