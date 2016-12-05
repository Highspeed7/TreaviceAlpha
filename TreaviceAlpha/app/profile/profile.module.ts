import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ProfileComponent } from "./profile.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { WantsComponent } from "./profile-pages/wants.component";
import { SellingComponent } from "./profile-pages/selling.component";
import { CanDoComponent } from "./profile-pages/can-do.component";
import { ProgressBarComponent } from "./progress/progress.component";
import { CanDoAddComponent } from "./profile-pages/components/can-do-add.component";

import { ProgressService } from "../services/progress/progress.service";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent,
        ContactCardComponent,
        WantsComponent,
        SellingComponent,
        CanDoComponent,
        CanDoAddComponent,
        ProgressBarComponent
    ],
    imports: [
        SideNavModule,
        RouterModule,
        CommonModule
    ],
    providers: [
        ProgressService
    ]
})

export class ProfileModule { }
