import { Component } from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: "nav[navbar]",
    templateUrl: "./app/nav/navbar.component.html"
})

export class NavbarComponent {

    constructor(private router: Router) {  }
}