import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile.component";
import { HomeComponent } from "../home/home.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "profile",
                children: [
                    {
                        path: "",
                        component: ProfileComponent
                    },
                    {
                        path: "test",
                        component: HomeComponent
                    }
                ]
            },
            {
                path: "testing",
                component: HomeComponent,
                outlet: "testing"
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule { }
