import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

import { ObjectHelper } from "../helpers/objectHelper.service";

import { UserData } from "../../models/index";

@Injectable()
export class ProgressService {
    public progressPercentSource = new Subject<string>();
    public progressPercent$ = this.progressPercentSource.asObservable();

    constructor(private objectHelper: ObjectHelper) {}

    public setProgressPercent(percent: string) {
        this.progressPercentSource.next(percent);
    }

    public getProfileProgress(user: UserData) {
        const keyArr = ["id", "user", "userId"];
        const keySet = new Set(keyArr);
        let numComplete = 0;
        for (let key in user.profile) {
            if (user.profile.hasOwnProperty(key)) {
                if (keySet.has(key)) {
                    continue;
                } else {
                    {
                        if (user.profile[key] !== null) {
                            numComplete++;
                        }
                    }
                }
            }
        }
        // Get the size of the key array so we know how many properties to subtract.
        const less = keyArr.length;
        // Get the size of the user profile object.
        const profileSize = this.objectHelper.size(user.profile);

        return (numComplete * 100) / (profileSize - less);
    }
}

