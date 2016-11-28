import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { ProfileComponent } from "./profile.component";
import { ContactCardComponent } from "./contact-card/contact-card.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: "profile",
                component: ProfileComponent,
                children: [
                    {
                        path: "",
                        component: ContactCardComponent
                    },
                    {
                        path: "testing",
                        component: ContactCardComponent,
                        outlet: "testing"
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class ProfileRoutingModule { }
