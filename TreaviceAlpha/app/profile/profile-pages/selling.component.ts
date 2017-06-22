import { Component, OnInit, ViewChild } from "@angular/core";
import { AssetTrove } from "../../models/index";
import { AssetService } from "../../services/asset.service";
import { TroveViewComponent } from "./components/trove-view.component";
import { NewTroveModalComponent } from "./components/new-trove-modal.component";

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

    @ViewChild("newTroveModal")
    public newTroveModal: NewTroveModalComponent;

    public troves: AssetTrove[];

    constructor(private assetService: AssetService) {}

    public ngOnInit() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
            });
    }

    public onItemClicked(item: AssetTrove) {
        if (!item.isSystem) {
            this.troveModal.show(item);
        }
    }

    public newItemClicked() {
        this.newTroveModal.show();
    }

    public troveUpdated() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
            });
    }
    public newItemAdded() {
        this.assetService.getTroves()
            .subscribe((r: AssetTrove[]) => {
                this.troves = r;
                this.newTroveModal.hide();
            });
    }
}
