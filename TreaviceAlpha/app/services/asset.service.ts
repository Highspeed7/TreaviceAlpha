import { Injectable } from "@angular/core";
import { Http, Response} from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/operator/map";
import "rxjs/operator/share";

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

    public addNewTreasure(treasure: Treasure): Observable<Response> {
        const source = this.http.post(`${this.apiRoute}/treasures`, treasure);
        return source
            .map(r => r);
    }

    public updateTrove(trove: AssetTrove) {
        const source = this.http.put(`${this.apiRoute}/troves/${trove.id}`, trove);
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