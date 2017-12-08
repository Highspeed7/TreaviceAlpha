import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

@Injectable()
export class GoogleService {
    public googleApi = "https://maps.googleapis.com/maps/api/geocode/json"

    private apiKey = "AIzaSyBqdJUrH7-yyCy2sV1woshIIJ0gOBuXZ2Y";

    constructor(private _http: Http){}

    public getAddressCoordinates(address: string): Observable<Response> {
        return this._http.get(`${this.googleApi}?address=${address}&key=${this.apiKey}`)
                .map((r) => r.json());
    }
}