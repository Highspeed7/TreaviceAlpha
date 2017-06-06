import { Injectable } from "@angular/core";
import {Observable} from "rxjs/observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { UserData, Profile } from "../models/index";

@Injectable()
export class AccountService {
    private isloggedIn: Boolean = false;
    set loggedIn(val) { this.isloggedIn = val; }
    get loggedIn() { return this.isloggedIn; }

    private url = "/api/user";

    constructor(private httpService: Http) {}

    public registerUser(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(`${this.url}/register`, data, options);
        return source
            .map(r => {
                if (r.status === 200) {
                    return r;
                } else {
                    throw new Error("Error: User not created");
                }
            })
            .toPromise();
    }

    public login(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(`${this.url}/login`, data, options);
        return source
            .map(r => r.json())
            .toPromise();
    }

    public getProfileData(user: UserData): Observable<Response> {
        const source: Observable<Response> = this.httpService.get(`${this.url}/profile/?userEmail=${user.email}`);
        return source
            .map((r: Response) => {
                return r.json();
            });
    }

    public updateProfile(userData: any, email: string, token): Observable<boolean> {
        userData.email = email;
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.put(`${this.url}/profile`, userData, options);
        return source
            .map((r: Response) => {
                // Set the new user data
                var userDataObj = {
                    email: userData.email,
                    profile: userData
                }
                this.setLastLoggedInUser(userDataObj);
                return r.json();
            });
    }

    public logout(): Observable<Response> {
        const source: Observable<Response> = this.httpService.get(`${this.url}/logout`);
        return source;
    }

    public init() {
        // this.applicationData.userData = this.getLastLoggedInUser();
        return true;
    }

    public isLoggedIn(): Observable<boolean> {
        const source: Observable<Response> = this.httpService.get(`${this.url}/isLoggedIn`);
        return source
            .map((r) => {
                if (r.json() === true) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    public setLastLoggedInUser(userData: UserData): Promise<boolean> {
        localStorage.setItem("treavice", JSON.stringify(userData));
        return Promise.resolve(true);
    }

    public getLastLoggedInUser() {
        let userData: UserData;
        if ((localStorage.getItem("treavice")) !== null) {
            userData = JSON.parse(localStorage.getItem("treavice"));
            return userData;
        }
        return null;
    } 
}
