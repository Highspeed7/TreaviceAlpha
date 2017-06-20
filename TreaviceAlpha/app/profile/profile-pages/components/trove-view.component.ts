import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "../../../shared/modals/modal.component";
import { AssetTrove } from "../../../models/index";

@Component({
    selector: "trove-view",
    templateUrl: "app/profile/profile-pages/components/trove-view.component.html"
})
export class TroveViewComponent {
    @ViewChild("trModal")
    public bsModal: ModalComponent;

    public trove: AssetTrove;

    public show(trove: AssetTrove) {
        this.trove = trove;
        this.bsModal.show();
    }
}