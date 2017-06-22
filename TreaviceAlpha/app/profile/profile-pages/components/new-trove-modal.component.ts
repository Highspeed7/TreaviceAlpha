import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "../../../shared/modals/modal.component";
import { AssetTrove } from "../../../models/index";

@Component({
    selector: "new-trove",
    templateUrl: "app/profile/profile-pages/components/new-trove-modal.component.html"
})

export class NewTroveModalComponent {
    @ViewChild("trModal")
    public bsModal: ModalComponent;

    public show() {
        this.bsModal.show();
    }
}