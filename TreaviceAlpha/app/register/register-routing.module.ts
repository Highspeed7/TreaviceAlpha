import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { RegisterComponent } from "./register.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "sign-up", component: RegisterComponent }
        ])
    ],
    exports: [RouterModule]
})

export class RegisterRoutingModule { }
