import { NgModule } from "@angular/core";

import { ListSearchComponent } from "./listings-search.component";

import { ListSearchRoutingModule } from "./listings-search-routing.module";

@NgModule({
    declarations: [
        ListSearchComponent
    ],
    imports: [
        ListSearchRoutingModule
    ],
    exports: [
        ListSearchComponent,
        ListSearchRoutingModule
    ]
})

export class ListSearchModule { }
