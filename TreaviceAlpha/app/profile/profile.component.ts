import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { ProgressService } from "../services/progress/progress.service";

@Component({
    templateUrl: "app/profile/profile.component.html"
})

export class ProfileComponent implements OnDestroy {
    public percentComplete: string; 
    public progressSub: Subscription;
    public profileComplete: boolean;

    public expandableFields = [
        { title: "Complete your profile" },
        { title: "Second link"}
    ];

    constructor(private progressService: ProgressService) {
        this.progressSub = this.progressService.progressPercent$.subscribe((progress: string) => {
            this.percentComplete = progress;
            this.profileComplete = (parseInt(this.percentComplete) === 100);
        });
    }

    public ngOnDestroy() {
        this.progressSub.unsubscribe();
    }
}
