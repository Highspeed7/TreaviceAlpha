import { NgModule } from "@angular/core";

import { ProfileComponent } from "./profile.component";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent
    ],
    imports: [
        SideNavModule
    ]
})

export class ProfileModule { }