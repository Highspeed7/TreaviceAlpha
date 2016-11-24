import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AccountService } from "./services/account.service";

@Component({
    selector: "trvcapp",
    template: `
    <router-outlet></router-outlet>`,
    styles: [`
        :host {
            height: inherit;
        }
    `]
})

export class AppComponent implements OnInit {

    
}
