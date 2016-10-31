import {Component} from "@angular/core";

@Component({
    selector: "trvc-app",
    template: `
    <nav navbar class="navbar navbar-default col-md-2" id="side-nav"></nav>
    <router-outlet></router-outlet>`,
    styles: [`
        :host {
            height: inherit;
        }
    `]
})

export class AppComponent { }