import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
    templateUrl: "app/search/listings-search.component.html"
})

export class ListSearchComponent {
    constructor(private routes: Router) {  }
}
