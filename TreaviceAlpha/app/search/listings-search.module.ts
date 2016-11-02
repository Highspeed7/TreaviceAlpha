import { NgModule } from "@angular/core";

import { ListSearchComponent } from "./listings-search.component";

import { SideNavModule } from "../nav/sidenav.module";
import { ListSearchRoutingModule } from "./listings-search-routing.module";

@NgModule({
    declarations: [
        ListSearchComponent
    ],
    imports: [
        ListSearchRoutingModule,
        SideNavModule
    ],
    exports: [
        ListSearchComponent
    ]
})

export class ListSearchModule { }
