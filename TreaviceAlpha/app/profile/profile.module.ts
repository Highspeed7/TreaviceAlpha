import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent,
        ContactCardComponent
    ],
    imports: [
        SideNavModule,
        RouterModule
    ]
})

export class ProfileModule { }
