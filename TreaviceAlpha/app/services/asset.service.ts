import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Treasure } from "../models/index";

@Injectable()
export class AssetService {
    private apiRoute = "api/user/profile";

    constructor(private http: Http) { }

    public addNewService(treasure: Treasure): Observable<Response> {
        const source = this.http.post(`${this.apiRoute}/services`, treasure);
        return source
            .map(r => r.json());
    }
}