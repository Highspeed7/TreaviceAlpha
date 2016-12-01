import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ProfileComponent } from "./profile.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { WantsComponent } from "./profile-pages/wants.component";
import { SellingComponent } from "./profile-pages/selling.component";
import { CanDoComponent } from "./profile-pages/can-do.component";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent,
        ContactCardComponent,
        WantsComponent,
        SellingComponent,
        CanDoComponent
    ],
    imports: [
        SideNavModule,
        RouterModule,
        CommonModule
    ]
})

export class ProfileModule { }
