import { Component, Input, ElementRef, OnInit } from "@angular/core";

import { ProgressService } from "../../services/progress/progress.service";

@Component({
    selector: "progress-bar",
    templateUrl: "app/profile/progress/progress.component.html"
})

export class ProgressBarComponent implements OnInit {

    @Input()
    public set progress(value: string) {
        this._progress = value + "%";
    }
    public get progress() {
        return this._progress;
    }
    private _progress: string;

    constructor(private element: ElementRef,
        private progressService: ProgressService
    ) {
    }

    public ngOnInit() {
        this.progressService.progressPercent$.subscribe((percent: string) => {
            this.progress = percent;
        });
    }
}
