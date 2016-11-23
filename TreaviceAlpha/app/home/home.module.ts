import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";

import { SideNavModule } from "../nav/sidenav.module";
import { HomeRoutingModule } from "./home-routing.module";
import { RegisterModule } from "../register/register.module";

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports: [
        RegisterModule,
        HomeRoutingModule,
        SideNavModule
    ],
    exports: [HomeComponent]
})

export class HomeModule { }
