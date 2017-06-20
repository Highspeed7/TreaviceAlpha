﻿import { Component, OnInit, ViewChild } from "@angular/core";
import { AssetTrove } from "../../models/index";
import { AssetService } from "../../services/asset.service";
import { TroveViewComponent } from "./components/trove-view.component";

@Component({
    templateUrl: "app/profile/profile-pages/selling.component.html",
    styles: [`
        .modal-dialog {
            left: 0px;
        }
    `]
})

export class SellingComponent implements OnInit {
    @ViewChild("troveView")
    public troveModal: TroveViewComponent;

    public troves: AssetTrove[];

    constructor(private assetService: AssetService) {}

    public ngOnInit() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
            });
    }

    public onItemClicked(item: AssetTrove) {
        this.troveModal.show();
    }
}
