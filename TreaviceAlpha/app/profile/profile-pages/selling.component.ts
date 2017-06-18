import { Component, OnInit } from "@angular/core";
import { AssetTrove } from "../../models/index";
import { AssetService } from "../../services/asset.service";

@Component({
    templateUrl: "app/profile/profile-pages/selling.component.html"
})

export class SellingComponent implements OnInit {
    public troves: AssetTrove[];

    constructor(private assetService: AssetService) {}

    ngOnInit() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
            });
    }
}
