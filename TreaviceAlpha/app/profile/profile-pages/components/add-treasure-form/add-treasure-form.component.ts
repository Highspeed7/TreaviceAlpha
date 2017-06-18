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
    public troves: AssetTrove[];

    public treasureForm: FormGroup;

    constructor(private fb: FormBuilder, private assetService: AssetService ) { }

    public ngOnInit() {
        this.treasureForm = this.fb.group({
            troveTitle: [""],
            existTroveTitle: [""]
        });
    }

    public ngOnChanges(value: SimpleChange) {
        if (value.hasOwnProperty("troves")) {
            let newVal: any = value;
            if (newVal.troves.currentValue) {
                this.troves = this.troves.filter(t => !t.isSystem);
            }
        }
    }

    public onSubmit() {

    }
}