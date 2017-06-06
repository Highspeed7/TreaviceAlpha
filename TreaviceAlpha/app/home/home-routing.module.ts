import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {ListSearchModule} from "../search/listings-search.module";

import { HomeComponent } from "./home.component";
import { HomeMainComponent } from "./home-main/home-main.component";
import { ProfileComponent } from "../profile/profile.component";
import { ListSearchComponent } from "../search/listings-search.component";
import { RegisterComponent } from "../register/register.component";
import { LoginComponent } from "../login/login.component";
import { ContactCardComponent } from "../profile/contact-card/contact-card.component";
import { WantsComponent } from "../profile/profile-pages/wants.component";
import { CanDoComponent } from "../profile/profile-pages/can-do.component";
import { SellingComponent } from "../profile/profile-pages/selling.component";

@NgModule({
    imports: [
        ListSearchModule,
        RouterModule.forChild([
            {
                path: "home", component: HomeComponent, children: [
                    { path: "main", component: HomeMainComponent },
                    {
                        path: "profile", component: ProfileComponent,
                        children: [
                            {
                                path: "",
                                component: ContactCardComponent
                            },
                            {
                                path: "wants",
                                component: WantsComponent,
                                outlet: "profile-pages"
                            },
                            {
                                path: "can-do",
                                component: CanDoComponent,
                                outlet: "profile-pages"
                            },
                            {
                                path: "selling",
                                component: SellingComponent,
                                outlet: "profile-pages"
                            }
                        ] },
                    { path: "search-listings", component: ListSearchComponent },
                    { path: "sign-up", component: RegisterComponent },
                    { path: "login", component: LoginComponent }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
