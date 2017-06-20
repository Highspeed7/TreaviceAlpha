import { Component, OnInit, Input, OnChanges, SimpleChange } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssetTrove } from "../../../../models/index";
import { AssetService } from "../../../../services/asset.service";

@Component({
    selector: "add-treasure-form",
    templateUrl: "app/profile/profile-pages/components/add-treasure-form/add-treasure-form.component.html"
})

export class AddTreasureFormComponent implements OnInit {
    @Input()
    public newTrove: boolean = true;

    public treasureForm: FormGroup;
    public troveForm: FormGroup;

    constructor(private fb: FormBuilder, private assetService: AssetService) {
        this.buildFormGroup();
    }

    public ngOnInit() {
        
    }

    public getFormType() {
        return (this.newTrove) ? this.troveForm : this.treasureForm;
    }

    public onSubmit() {

    }

    private ngOnChanges(value: SimpleChange) {
        if (value.hasOwnProperty("newTrove")) {
            this.buildFormGroup();
        }
    }

    private buildFormGroup() {
        if (!this.newTrove) {
            this.treasureForm = this.fb.group({
                treasureTitle: ["New Treasure", Validators.required]
            });
        } else {
            this.troveForm = this.fb.group({
                troveTitle: ["New Trove"],
                treasureTitle: ["", Validators.required]
            });
        }
    }
}