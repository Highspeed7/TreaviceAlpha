﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemContainerComponent } from "./item-container.component";
import { ItemComponent } from "./item.component";
import { ModalComponent } from "./modals/modal.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ItemContainerComponent,
        ItemComponent,
        ModalComponent
    ],
    exports: [
        ItemContainerComponent,
        ItemComponent,
        ModalComponent
    ]
})

export class SharedComponentsModule { }