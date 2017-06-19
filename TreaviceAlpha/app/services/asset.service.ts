import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";

import { Treasure, AssetCategory, AssetTrove } from "../models/index";

@Injectable()
export class AssetService {
    private apiRoute = "api/user/profile/assets";

    constructor(private http: Http) { }

    public addNewService(treasure: Treasure): Observable<Response> {
        const source = this.http.post(`${this.apiRoute}/services`, treasure);
        return source
            .map(r => r);
    }

    public getCategories(): Observable<AssetCategory[]> {
        const source = this.http.get(`${this.apiRoute}/categories`);
        return source
            .map(r => r.json());
    }

    public getTroves(): Observable<AssetTrove[]> {
        const source = this.http.get(`${this.apiRoute}/troves`);
        return source
            .map(r => r.json());
    }
}