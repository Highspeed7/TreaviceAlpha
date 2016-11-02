import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "nav[side-nav]",
    templateUrl: "app/nav/sidenav.component.html"
})

export class SideNavComponent {
    constructor(private router: Router) {}
}
