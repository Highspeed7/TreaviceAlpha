import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";

import { SideNavModule } from "../nav/sidenav.module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports: [
        SideNavModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
})

export class HomeModule { }
