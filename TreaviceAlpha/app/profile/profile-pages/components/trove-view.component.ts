import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "../../../shared/modals/modal.component";
import { AssetTrove } from "../../../models/index";
import { Treasure, TreasureType } from "../../../models/index";

@Component({
    selector: "trove-view",
    templateUrl: "app/profile/profile-pages/components/trove-view.component.html"
})
export class TroveViewComponent {
    @ViewChild("trModal")
    public bsModal: ModalComponent;

    public trove: AssetTrove;
    public hasService: boolean = false;

    public items: Treasure[] = [];
    public services: Treasure[] = [];

    public show(trove: AssetTrove) {
        this.trove = trove;
        this.hasService = this.troveHasService();
        this.extractAssets(trove);
        this.bsModal.show();
    }

    public troveHasService(): boolean {
        return (this.trove.treasures.filter((tr: Treasure) => {
            return tr.type === TreasureType.Service;
        }).length > 0);
    }

    private extractAssets(tr: AssetTrove) {
        this.services = tr.treasures.filter(t => t.type === TreasureType.Service);
        this.items = tr.treasures.filter(t => t.type === TreasureType.Item);
    }
}