import { Injectable } from "@angular/core";
import {Observable} from "rxjs/observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

import { ApplicationData } from "../models/index";

@Injectable()
export class AccountService {
    private url = "/api/user/";
    public applicationData: ApplicationData;

    constructor(private httpService: Http) {
        this.applicationData = new ApplicationData();
    }

    public registerUser(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(this.url + "register", data, options);
        return source
            .map(r => r.json)
            .toPromise();
    }

    public init() {
        this.applicationData.userData = this.getLastLoggedInUser();
    }

    private getLastLoggedInUser() {
        let usernameEmail: string;
        if ((localStorage.getItem("lastLoggedInUser")) !== null) {
            usernameEmail = localStorage.getItem("lastLoggedInUser");
            return {
                UserEmail: usernameEmail
            };
        }
        return null;
    } 

    public isLoggedIn():Promise<any> {
        const source: Observable<Response> = this.httpService.get(this.url + "isLoggedIn");
        return source
            .toPromise();
    }
}
