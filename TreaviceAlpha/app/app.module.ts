import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { ListSearchModule } from "./search/listings-search.module";
import { LandingModule } from "./landing/landing.module";

import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        ListSearchModule,
        LandingModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
