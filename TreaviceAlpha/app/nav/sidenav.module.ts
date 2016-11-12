import { NgModule } from "@angular/core";

import { SideNavComponent } from "./sidenav.component";

import { ListSearchRoutingModule} from "../search/listings-search-routing.module";

@NgModule({
    declarations: [SideNavComponent],
    imports: [
        ListSearchRoutingModule
    ],
    exports: [SideNavComponent]
})

export class SideNavModule {}
