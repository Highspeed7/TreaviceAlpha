import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import {ListSearchModule} from "../search/listings-search.module";

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        ListSearchModule,
        RouterModule.forChild([
            { path: "home", component: HomeComponent }
        ])
    ],
    exports: [
        RouterModule
    ]
})

export class HomeRoutingModule { }
