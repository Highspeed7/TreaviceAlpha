import { Component, OnInit, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Response } from "@angular/http";
import { AssetTrove, AssetCategory, Treasure, TreasureType} from "../../../../models/index";
import { AssetService } from "../../../../services/asset.service";

@Component({
    selector: "add-treasure-form",
    templateUrl: "app/profile/profile-pages/components/add-treasure-form/add-treasure-form.component.html"
})

export class AddTreasureFormComponent implements OnInit {
    @Input()
    public trove: AssetTrove;

    public treasureForm: FormGroup;

    public categories = [];

    constructor(private fb: FormBuilder, private assetService: AssetService) {
        this.buildForms();
    }

    public ngOnInit() {
        this.assetService.getCategories()
            .subscribe((cats: AssetCategory[]) => {
                this.categories = cats;
                this.treasureForm.controls["treasureCategory"].setValue(cats[0].id);
            });
    }

    public onSubmit() {
        let treasure: Treasure = {
            title: this.treasureForm.value.treasureTitle,
            desc: this.treasureForm.value.treasureDesc,
            ptValue: this.treasureForm.value.treasureValue,
            value: this.treasureForm.value.treasureValue,
            catId: this.treasureForm.value.treasureCategory,
            type: TreasureType.Item
        }

        // We will update based on whether or not there is a trove available.
        if (this.trove) {
            this.trove.treasures.push(treasure);
            this.assetService.updateTrove(this.trove)
                .subscribe(res => {
                    if (res.status === 200) {
                        alert("Treasure saved successfully");
                    }
                }, e => { alert("Adding treasure to trove failed with: " + e) });
        } else {
            // Call api to add new trove and treasure.
            this.assetService.addNewTreasure(treasure)
                .subscribe(res => {
                    if (res.status === 200) {
                        alert("Treasure saved successfully");
                    }
                }, e => { alert("Treasure save failed with: " + e) });
        }
            
    }

    private buildForms() {
        this.treasureForm = this.fb.group({
            treasureTitle: ["New Item", Validators.required],
            treasureDesc: [""],
            treasureValue: [0],
            treasureCategory: ["", Validators.required]
        });
    }
}