import { Component, Input } from "@angular/core";

@Component({
    selector: "item",
    templateUrl: "app/shared/item.component.html",
    styles: [`
        :host {
            cursor: pointer;
        }
        
        div.item {
            min-height: 100px;
            max-height: 100px;
            padding: 5px;
            border: 1px solid grey;
            border-collapse: collapse;
        }
    `]
})

export class ItemComponent {
    @Input()
    public title: string;

    @Input()
    public points: number;
}