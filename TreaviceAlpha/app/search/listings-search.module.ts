import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ListSearchComponent } from "./listings-search.component";

import { SideNavModule } from "../nav/sidenav.module";

import { ListSearchRoutingModule } from "./listings-search-routing.module";

@NgModule({
    declarations: [
        ListSearchComponent
    ],
    imports: [
        ListSearchRoutingModule,
        SideNavModule,
        CommonModule
    ],
    exports: [
        ListSearchComponent,
        ListSearchRoutingModule
    ]
})

export class ListSearchModule { }
