import { Injectable } from "@angular/core";
import {Observable} from "rxjs/observable";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

@Injectable()
export class AccountService {
    private url = "/api/account/";

    constructor(private httpService: Http) {  }

    public registerUser(data, token): Promise<any> {
        let headers = new Headers({ "Content-Type": "application/json", "__RequestVerificationToken": token });
        let options = new RequestOptions({ headers: headers });
        const source: Observable<Response> = this.httpService.post(this.url, data, options);
        return source
            .map(r => r.json)
            .toPromise();
    } 
}
