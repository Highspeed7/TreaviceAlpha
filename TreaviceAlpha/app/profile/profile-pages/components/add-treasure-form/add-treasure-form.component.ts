import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AssetTrove } from "../../../../models/index";
import { AssetService } from "../../../../services/asset.service";

@Component({
    selector: "add-treasure-form",
    templateUrl: "app/profile/profile-pages/components/add-treasure-form/add-treasure-form.component.html"
})

export class AddTreasureFormComponent implements OnInit {
    public treasureForm: FormGroup;
    public troves: AssetTrove[];

    constructor(private fb: FormBuilder, private assetService: AssetService ) { }

    public ngOnInit() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
            });

        this.treasureForm = this.fb.group({
            troveTitle: [""],
            existTroveTitle: [""]
        });
    }

    public onSubmit() {

    }
}