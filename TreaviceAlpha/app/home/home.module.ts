import { NgModule } from "@angular/core";

import { HomeComponent } from "./home.component";

import { ListSearchModule } from "../search/listings-search.module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule ({
    declarations: [
        HomeComponent
    ],
    imports: [
        ListSearchModule,
        HomeRoutingModule
    ],
    exports: [HomeComponent]
})

export class HomeModule { }
