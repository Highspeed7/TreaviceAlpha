import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssetService } from "../../../services/asset.service";

@Component({
    selector: "add-skill-form",
    templateUrl: "app/profile/profile-pages/components/add-skill-form.component.html"
})

export class AddSkillComponent implements OnInit {
    public skillForm: FormGroup;

    constructor(private fb: FormBuilder, private assetService: AssetService){}

    public categories = [
        { name: "Cat 1" },
        { name: "Cat 2" },
        { name: "Cat 3" }
    ];

    public ngOnInit() {
        this.skillForm = this.fb.group({
            title: this.initSkillTitle(),
            desc: this.initSkillDesc(),
            category: ["", Validators.required],
            ptValue: [0]
        });
    }

    public onSubmit() {
        this.assetService.addNewService(this.skillForm.value)
            .subscribe(r => {
                if (r.status === 200) {
                    alert("Service saved successfully");
                }
            }, e => { alert("Service save failed with: " + e) });
    }

    private initSkillTitle() {
        return ["", Validators.required];
    }

    private initSkillDesc() {
        return ["", Validators.required];
    }
}
