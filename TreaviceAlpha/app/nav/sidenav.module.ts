import { NgModule } from "@angular/core";

import {ListSearchModule} from "../search/listings-search.module";

import { SideNavComponent } from "./sidenav.component";

@NgModule({
    declarations: [SideNavComponent],
    imports: [
        ListSearchModule
    ],
    exports: [SideNavComponent]
})

export class SideNavModule {}
