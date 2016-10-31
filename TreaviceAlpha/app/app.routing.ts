import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import {SearchComponent} from "./search/search.component";

export const routing = RouterModule.forRoot([
    { path: "", component: HomeComponent },
    { path: "search", component: SearchComponent }
]);