export class RegisterFormModel {
    public Email: string;
    public Password: string;
    public ConfirmPassword: string;
}

export class ApplicationData {
    public userData: UserData;
}

class UserData {
    public UserEmail: string;
}
