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

    public addNewServiceToTrove() {
        
    }

    public addExistingServiceToTrove() {
        
    }

    public addNewTreasure(trove: AssetTrove): Observable<Response> {
        const source = this.http.post(`${this.apiRoute}/treasures`, trove);
        return source
            .map(r => r);
    }

    public addNewTreasureToTrove(item: Treasure) {
        const source = this.http.put(`${this.apiRoute}/troves`, item);
        return source
            .map(r => r);
    }

    public addExistingTreasureToTrove() {
        
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