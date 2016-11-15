import { NgModule } from "@angular/core";

import { SideNavComponent } from "./sidenav.component";
import {RegisterComponent} from "../register/register.component";

import { ListSearchRoutingModule} from "../search/listings-search-routing.module";
import { RegisterRoutingModule} from "../register/register-routing.module";

@NgModule({
    declarations: [
        RegisterComponent,
        SideNavComponent
    ],
    imports: [
        ListSearchRoutingModule,
        RegisterRoutingModule
    ],
    exports: [SideNavComponent]
})

export class SideNavModule {}
