import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { LoginComponent } from "./login.component";
import { LoginFormComponent } from "./login-form/login-form.component";
import { SideNavModule } from "../nav/sidenav.module";

import { ObjectHelper } from "../services/helpers/objectHelper.service";

@NgModule({
    declarations: [
        LoginComponent,
        LoginFormComponent
    ],
    imports: [
        SideNavModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        ObjectHelper
    ]
})

export class LoginModule { }
