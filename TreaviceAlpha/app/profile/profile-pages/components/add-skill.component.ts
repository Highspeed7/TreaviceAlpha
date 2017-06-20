﻿import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssetService } from "../../../services/asset.service";
import { AssetCategory, Treasure } from "../../../models/index";

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
                this.skillForm.controls["category"].setValue(cats[0].id);
            });

        this.skillForm = this.fb.group({
            title: this.initSkillTitle(),
            desc: this.initSkillDesc(),
            category: ["", Validators.required],
            ptValue: [0]
        });
    }

    public onSubmit() {
        var treasure: Treasure = {
            title: this.skillForm.value.title,
            desc: this.skillForm.value.desc,
            catId: parseInt(this.skillForm.value.category, 10),
            value: this.skillForm.value.ptValue
        }

        this.assetService.addNewService(treasure)
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
