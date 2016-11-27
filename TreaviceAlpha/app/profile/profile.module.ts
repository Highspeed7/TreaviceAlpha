import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile.component";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        SideNavModule,
        RouterModule
    ]
})

export class ProfileModule { }
