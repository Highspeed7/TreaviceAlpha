import {Component} from "@angular/core";

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

export class AppComponent { }
