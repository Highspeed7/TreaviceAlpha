import { Component } from "@angular/core";

import { Router } from "@angular/router";
import { WindowRef } from "../services/windowRef.service";

@Component({
    templateUrl: "app/search/listings-search.component.html"
})

export class ListSearchComponent {
    private geolocation: any;
    constructor(private routes: Router, private winRef: WindowRef) {
        let window = winRef.nativeWindow;

        if (window.navigator.geolocation) {
            window.navigator.geolocation.getCurrentPosition(this.outputPosition);
        } else {
            alert("Unable to locate user");
        }
    }

    private outputPosition(position: any) {
        console.log(position);
    }
}
