import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModalModule } from "ngx-bootstrap";

import { AppComponent } from "./app.component";

import { AccountService } from "./services/account.service";
import { AssetService } from "./services/asset.service";

// import { ListSearchModule } from "./search/listings-search.module";
import { LandingModule } from "./landing/landing.module";

import { AppRoutingModule } from "./app-routing.module";
import { ProfileRoutingModule } from "./profile/profile-routing.module";

import { WindowRef } from "./services/windowRef.service";

@NgModule({
    imports: [
        ModalModule.forRoot(),
        BrowserModule,
        AppRoutingModule,
        ProfileRoutingModule,
        LandingModule,
        ModalModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AccountService,
        AssetService,
        WindowRef
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
