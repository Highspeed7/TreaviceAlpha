import { Component, ViewChild } from "@angular/core";
import { ModalComponent } from "../../../shared/modals/modal.component";

@Component({
    selector: "trove-view",
    templateUrl: "app/profile/profile-pages/components/trove-view.component.html"
})
export class TroveViewComponent {
    @ViewChild("trModal")
    public bsModal: ModalComponent;

    public show() {
        this.bsModal.show();
    }
}