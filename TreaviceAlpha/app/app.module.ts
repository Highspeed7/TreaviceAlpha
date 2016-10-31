import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./nav/navbar.component";
import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";

import {routing} from "./app.routing";


@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        SearchComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }