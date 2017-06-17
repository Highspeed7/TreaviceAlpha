export class RegisterFormModel {
    public Email: string;
    public Password: string;
    public ConfirmPassword: string;
}

export class ApplicationData {
    public userData: UserData;
}

export class Profile {
    public firstName: string;
    public lastName: string;
    public street: string;
    public state: string;
    public city: string;
    public zipCode: string;
    public phone: string;
}

export class UserData {
    public email: string;
    public profile: Profile;
}

export class Treasure {
    public title: string;
    public desc: string;
    public category: string;
    public ptValue: number;
}

export class GeoStateModel {
    public name: string;
    public abbrv: string;
}
