import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssetService } from "../../../services/asset.service";
import { AssetCategory } from "../../../models/index";

@Component({
    selector: "add-skill-form",
    templateUrl: "app/profile/profile-pages/components/add-skill-form.component.html"
})

export class AddSkillComponent implements OnInit {
    public skillForm: FormGroup;

    constructor(private fb: FormBuilder, private assetService: AssetService){}

    public categories = [];

    public ngOnInit() {
        // Get categories
        this.assetService.getCategories()
            .subscribe((cats: AssetCategory[]) => {
                this.categories = cats;
            });

        this.skillForm = this.fb.group({
            title: this.initSkillTitle(),
            desc: this.initSkillDesc(),
            category: [this.categories[0].id, Validators.required],
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
