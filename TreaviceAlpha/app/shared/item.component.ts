import { Component } from "@angular/core";

@Component({
    selector: "item",
    template: "<div class='col-md-3'><ng-content></ng-content></div>"
})

export class ItemComponent {}