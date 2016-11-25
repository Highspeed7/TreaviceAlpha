import { Injectable } from "@angular/core";
import {Observable} from "rxjs/observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { UserData } from "../models/index";

@Injectable()
export class AccountService {
    private isloggedIn: Boolean = false;
    set loggedIn(val) { this.isloggedIn = val; }
    get loggedIn() { return this.isloggedIn; }

    private url = "/api/user/";

    constructor(private httpService: Http) {}

    public registerUser(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(this.url + "register", data, options);
        return source
            .map(r => r.json())
            .toPromise();
    }

    public login(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(this.url + "login", data, options);
        return source
            .map(r => r.json())
            .toPromise();
    }

    public logout(): Observable<Response> {
        const source: Observable<Response> = this.httpService.get(this.url + "logout");
        return source;
    }

    public init() {
        // this.applicationData.userData = this.getLastLoggedInUser();
        return true;
    }

    public isLoggedIn(): Observable<boolean> {
        const source: Observable<Response> = this.httpService.get(this.url + "isLoggedIn");
        return source
            .map((r) => {
                if (r.json() === true) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    public setLastLoggedInUser(userData: UserData) {
        localStorage.setItem("treavice", JSON.stringify(userData));
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
