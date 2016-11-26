import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";

import { SideNavModule } from "../nav/sidenav.module";
import { HomeRoutingModule } from "./home-routing.module";
import { RegisterModule } from "../register/register.module";
import { LoginModule } from "../login/login.module";
import { ProfileModule } from "../profile/profile.module";

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports: [
        RegisterModule,
        ProfileModule,
        LoginModule,
        HomeRoutingModule,
        SideNavModule
    ],
    exports: [HomeComponent]
})

export class HomeModule { }
