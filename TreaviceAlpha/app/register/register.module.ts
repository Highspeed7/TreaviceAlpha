import { NgModule } from "@angular/core";
import { FormsModule} from "@angular/forms";

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
        RegisterRoutingModule,
        FormsModule,
        SideNavModule
    ],
    exports: [
        RegisterComponent
    ]
})

export class RegisterModule { }
