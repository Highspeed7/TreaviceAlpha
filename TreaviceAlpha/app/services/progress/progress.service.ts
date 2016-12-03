import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ProgressService {
    public progressPercentSource = new Subject<string>();
    public progressPercent$ = this.progressPercentSource.asObservable();

    public setProgressPercent(percent: string) {
        this.progressPercentSource.next(percent);
    }
}
