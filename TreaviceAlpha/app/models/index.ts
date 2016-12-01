export class RegisterFormModel {
    public Email: string;
    public Password: string;
    public ConfirmPassword: string;
}

export class ApplicationData {
    public userData: UserData;
}

export class UserData {
    public email: string;
    public profile: {
        firstName: string,
        lastName: string,
        street: string,
        city: string,
        state: string,
        zipCode: string,
        phone: string,
    };
}
