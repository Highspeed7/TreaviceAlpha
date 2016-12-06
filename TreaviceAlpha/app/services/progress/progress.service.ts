import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { ObjectHelper } from "../helpers/objectHelper.service";
import { AccountService } from "../../services/account.service";

import { UserData } from "../../models/index";

@Injectable()
export class ProgressService {
    public progressPercentSource = new Subject<string>();
    public progressPercent$ = this.progressPercentSource.asObservable();
    private user: UserData;

    constructor(private objectHelper: ObjectHelper, private accountService: AccountService) {}

    public setProgressPercent(percent: string) {
        this.progressPercentSource.next(percent);
    }

    // TODO: Move server-side to prevent malicious use.
    public getProfileProgress() {
        this.user = this.accountService.getLastLoggedInUser();
        const keyArr = ["id", "user", "userId"];
        const keySet = new Set(keyArr);
        let numComplete = 0;
        for (let key in this.user.profile) {
            if (this.user.profile.hasOwnProperty(key)) {
                if (keySet.has(key)) {
                    continue;
                } else {
                    {
                        if (this.user.profile[key] !== null) {
                            numComplete++;
                        }
                    }
                }
            }
        }
        // Get the size of the key array so we know how many properties to subtract.
        const less = keyArr.length;
        // Get the size of the user profile object.
        const profileSize = this.objectHelper.size(this.user.profile);

        return (numComplete * 100) / (profileSize - less);
    }
}
