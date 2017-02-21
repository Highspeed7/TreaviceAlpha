﻿import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ProfileComponent } from "./profile.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";
import { WantsComponent } from "./profile-pages/wants.component";
import { SellingComponent } from "./profile-pages/selling.component";
import { CanDoComponent } from "./profile-pages/can-do.component";
import { ProgressBarComponent } from "./progress/progress.component";
import { AddSkillComponent } from "./profile-pages/components/add-skill.component";
import { ExpandableFieldComponent } from "./profile-pages/components/expandable-field.component";
import { ProfileFormComponent } from "./forms/profile-form.component";

import { ProgressService } from "../services/progress/progress.service";

import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        ProfileComponent,
        ContactCardComponent,
        WantsComponent,
        SellingComponent,
        CanDoComponent,
        AddSkillComponent,
        ProgressBarComponent,
        ExpandableFieldComponent,
        ProfileFormComponent
    ],
    imports: [
        SideNavModule,
        RouterModule,
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        ProgressService
    ]
})

export class ProfileModule { }
