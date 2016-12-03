import { Component, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { ProgressService } from "../services/progress/progress.service";

@Component({
    templateUrl: "app/profile/profile.component.html"
})

export class ProfileComponent implements OnDestroy {
    // TODO: Write a progress service so that components can update the progress property
    public percentComplete: string; 
    public progressSub: Subscription;

    constructor(private progressService: ProgressService) {
        this.progressSub = this.progressService.progressPercent$.subscribe((progress: string) => {
            this.percentComplete = progress;
        });
    }

    public ngOnDestroy() {
        this.progressSub.unsubscribe();
    }
}
