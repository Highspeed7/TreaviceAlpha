﻿import { Component } from "@angular/core";

@Component({
    templateUrl: "app/profile/profile-pages/can-do.component.html"
})

export class CanDoComponent {
    public expandableFields = [
        { title: "Add a skill" } 
    ];
}
