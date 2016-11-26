import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SideNavComponent } from "./sidenav.component";

import { ListSearchRoutingModule } from "../search/listings-search-routing.module";
import { LoginRoutingModule } from "../login/login-routing.module";
import { ProfileRoutingModule } from "../profile/profile-routing.module";

@NgModule({
    declarations: [
        SideNavComponent
    ],
    imports: [
        CommonModule,
        ListSearchRoutingModule,
        LoginRoutingModule,
        ProfileRoutingModule
    ],
    exports: [SideNavComponent]
})

export class SideNavModule {}
