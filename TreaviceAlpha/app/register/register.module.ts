import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";

import { RegisterComponent } from "./register.component";
import { RegisterFormComponent } from "./register-form/register-form.component";

import { RegisterRoutingModule } from "./register-routing.module";
import { SideNavModule } from "../nav/sidenav.module";

import { AccountService } from "../services/account.service";

@NgModule({
    declarations: [
        RegisterComponent,
        RegisterFormComponent
    ],
    imports: [
        HttpModule,
        CommonModule,
        RegisterRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SideNavModule
    ],
    providers: [
        AccountService
    ],
    exports: [
        RegisterComponent
    ]
})

export class RegisterModule { }
