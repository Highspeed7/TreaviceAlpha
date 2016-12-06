import { Component, Input, ElementRef } from "@angular/core";

@Component({
    selector: "progress-bar",
    templateUrl: "app/profile/progress/progress.component.html"
})

export class ProgressBarComponent {
    public expandableFields = [
        { title: "Complete your profile" }
    ]
    @Input()
    public profileComplete: boolean;

    @Input()
    public set progress(value: string) {
        this._progress = value + "%";
    }
    public get progress() {
        return this._progress;
    }
    private _progress: string;

    constructor(private element: ElementRef) {
    }
}
