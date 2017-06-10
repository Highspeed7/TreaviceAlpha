import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: "add-skill-form",
    templateUrl: "app/profile/profile-pages/components/add-skill-form.component.html"
})

export class AddSkillComponent implements OnInit {
    public skillForm: FormGroup;

    constructor(private fb: FormBuilder){}

    public categories = [
        { name: "Cat 1" },
        { name: "Cat 2" },
        { name: "Cat 3" }
    ];

    public ngOnInit() {
        this.skillForm = this.fb.group({
            title: this.initSkillTitle(),
            desc: this.initSkillDesc(),
            isNeg: ["no"],
            category: ["", Validators.required]
        });
    }

    private initSkillTitle() {
        return ["", Validators.required];
    }

    private initSkillDesc() {
        return ["", Validators.required];
    }
}
