import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";

import { ObjectHelper } from "../helpers/objectHelper.service";
import { AccountService } from "../../services/account.service";

import { UserData } from "../../models/index";

@Injectable()
export class ProgressService {
    public progressPercentSource = new BehaviorSubject<string>(null);
    public progressPercent$ = this.progressPercentSource.asObservable();

    private apiRoute = "api/user";
    private user: UserData;

    constructor(
        private objectHelper: ObjectHelper,
        private accountService: AccountService,
        private httpService: Http
    ) { }

    public setProgressPercent(percent: string) {
        this.progressPercentSource.next(percent);
    }

    public getProfileProgress(email: string): Promise<number> {
        const source = this.httpService.get(`${this.apiRoute}/progress?email=${email}`);
        return source
            .map(r => r.json())
            .toPromise();
    }
}
