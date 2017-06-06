import { Component, Input } from "@angular/core";

@Component({
    selector: "expandable-field",
    templateUrl: "app/profile/profile-pages/components/expandable-field.component.html",
    styles: [`
        #expandableField {
            overflow-y: hidden;
            transition: height 2s ease;
        }
    `]
})

export class ExpandableFieldComponent {
    @Input()
    public title: string;
    @Input()
    public componentHidden = false;
    public fieldHeight = "0px";
    public fieldVisible = false;
    public profileProgress: number;

    public categories = [
        { name: "Cat 1" },
        { name: "Cat 2" },
        { name: "Cat 3" }
    ];

    constructor() {}

    public addFieldToggle() {

        this.fieldVisible = !this.fieldVisible;

        this.fieldHeight = this.fieldVisible ? "auto" : "0px";
    }
}
