import { NgModule } from "@angular/core";
import {RouterModule} from "@angular/router";

import {ListSearchComponent} from "./listings-search.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            { path: "search-listings", component: ListSearchComponent }
        ])
    ],
    exports: [RouterModule]
})

export class ListSearchRoutingModule { }
