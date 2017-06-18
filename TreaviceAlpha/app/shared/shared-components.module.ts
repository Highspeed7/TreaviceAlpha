import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ItemContainerComponent } from "./item-container.component";
import { ItemComponent } from "./item.component";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        ItemContainerComponent,
        ItemComponent
    ],
    exports: [
        ItemContainerComponent,
        ItemComponent
    ]
})

export class SharedComponentsModule { }