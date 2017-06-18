import { NgModule } from "@angular/core";

import { ItemContainerComponent } from "./item-container.component";

@NgModule({
    declarations: [
        ItemContainerComponent
    ],
    exports: [
        ItemContainerComponent
    ]
})

export class SharedComponentsModule { }