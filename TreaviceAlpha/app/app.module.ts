import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AccountService } from "./services/account.service";

// import { ListSearchModule } from "./search/listings-search.module";
import { LandingModule } from "./landing/landing.module";

import { AppRoutingModule } from "./app-routing.module";
import { ProfileRoutingModule } from "./profile/profile-routing.module";

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        ProfileRoutingModule,
        LandingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AccountService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
