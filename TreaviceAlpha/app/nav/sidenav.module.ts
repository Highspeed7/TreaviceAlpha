import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SideNavComponent } from "./sidenav.component";

import { ListSearchRoutingModule } from "../search/listings-search-routing.module";
import { LoginRoutingModule } from "../login/login-routing.module";

@NgModule({
    declarations: [
        SideNavComponent
    ],
    imports: [
        CommonModule,
        ListSearchRoutingModule,
        LoginRoutingModule
    ],
    exports: [SideNavComponent]
})

export class SideNavModule {}
