import { Component, Input, EventEmitter, Output} from "@angular/core";
import { AssetTrove } from "../models/index";

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
    public item: any;

    @Input()
    public hasValue: boolean = false;

    @Output()
    public itemClicked = new EventEmitter<any>();

    public onItemClick(item: any) {
        this.itemClicked.emit(item);
    }
}