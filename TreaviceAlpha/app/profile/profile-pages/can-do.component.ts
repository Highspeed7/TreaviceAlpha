import { Component, OnInit } from "@angular/core";
import { ProgressService } from "../../services/progress/progress.service";

@Component({
    templateUrl: "app/profile/profile-pages/can-do.component.html"
})

export class CanDoComponent implements OnInit {

    public profileComplete: boolean = false;

    public expandableFields = [
        { title: "Add a skill" } 
    ];

    constructor(private progressService: ProgressService) {}

    public ngOnInit() {
        this.progressService.progressPercent$
        .subscribe((percent: string) => {
            this.profileComplete = (parseInt(percent, 10) === 100);
        });
    }
}
