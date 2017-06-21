import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Response } from "@angular/http";
import { AssetTrove, AssetCategory, Treasure } from "../../../../models/index";
import { AssetService } from "../../../../services/asset.service";

@Component({
    selector: "add-treasure-form",
    templateUrl: "app/profile/profile-pages/components/add-treasure-form/add-treasure-form.component.html"
})

export class AddTreasureFormComponent implements OnInit {
    @Input()
    public trove: AssetTrove;

    public treasureForm: FormGroup;
    public troveForm: FormGroup;

    public categories = [];

    constructor(private fb: FormBuilder, private assetService: AssetService) {
        this.buildForms();
    }

    public ngOnInit() {
        this.assetService.getCategories()
            .subscribe((cats: AssetCategory[]) => {
                this.categories = cats;
                this.treasureForm.controls["treasureCategory"].setValue(cats[0].id);
                this.troveForm.controls["treasureCategory"].setValue(cats[0].id);
            });
    }

    public onSubmit() {
        if (this.troveForm.valid) {
            let newTrove: AssetTrove = new AssetTrove();
            newTrove.title = this.troveForm.value.troveTitle;
            newTrove.desc = this.troveForm.value.troveDesc;
            newTrove.value = this.troveForm.value.treasureValue;
            newTrove.treasures.push({
                title: this.troveForm.value.treasureTitle,
                desc: this.troveForm.value.treasureDesc,
                ptValue: this.troveForm.value.treasureValue,
                catId: this.troveForm.value.treasureCategory
            });

            // Call api to add new trove and treasure.
            this.assetService.addNewTreasure(newTrove)
                .subscribe(res => {
                    if (res.status === 200) {
                        alert("Treasure saved successfully");
                    }
                }, e => { alert("Treasure save failed with: " + e) });
        }
    }

    private buildForms() {
        this.troveForm = this.fb.group({
            troveTitle: ["New Trove"],
            troveDesc: [""],
            treasureTitle: ["New Item", Validators.required],
            treasureDesc: [""],
            treasureValue: [0],
            treasureCategory: ["", Validators.required]
        });
    }
}