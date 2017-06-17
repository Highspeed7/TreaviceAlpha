import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "add-treasure-form",
    templateUrl: "app/profile/profile-pages/components/add-treasure-form/add-treasure-form.component.html"
})

export class AddTreasureFormComponent implements OnInit {
    public treasureForm: FormGroup;
    public troves = [
        {
            name: "My first treasure trove!"
        },
        {
            name: "My second treasure trove!"
        }
    ];

    constructor(private fb: FormBuilder) { }

    public ngOnInit() {
        this.treasureForm = this.fb.group({
            troveTitle: [""],
            existTroveTitle: [""]
        });
    }

    public onSubmit() {

    }
}