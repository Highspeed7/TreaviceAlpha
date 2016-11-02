import { NgModule } from "@angular/core";

import {HomeModule} from "../home/home.module";
import { LandingRoutingModule } from "./landing-routing.module";
import {ListSearchRoutingModule} from "../search/listings-search-routing.module";

import { LandingComponent } from "./landing.component";

@NgModule({
    declarations: [LandingComponent],
    imports: [
        HomeModule,
        LandingRoutingModule,
        ListSearchRoutingModule
    ]
})

export class LandingModule { }
