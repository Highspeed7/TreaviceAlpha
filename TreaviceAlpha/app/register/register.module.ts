import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { RegisterComponent } from "./register.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

import { RegisterRoutingModule } from "./register-routing.module";
import { SideNavModule } from "../nav/sidenav.module";

@NgModule({
    declarations: [
        RegisterComponent,
        RegisterFormComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SideNavModule
    ],
    exports: [
        RegisterComponent
    ]
})

export class RegisterModule { }
