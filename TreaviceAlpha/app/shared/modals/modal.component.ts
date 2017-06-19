import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from "ngx-bootstrap/modal";

@Component({
    selector: "tr-modal",
    templateUrl: 'app/shared/modals/modal.component.html'
})
export class ModalComponent {
    @ViewChild("modal")
    public modal: ModalDirective;

    public classes = {
        "modal-dialog": true,
        "modal-lg": true
    };

    public show() {
        this.modal.show();
    }
}