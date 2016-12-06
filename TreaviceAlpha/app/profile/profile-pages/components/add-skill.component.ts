import { Component } from "@angular/core";

@Component({
    selector: "add-skill-form",
    templateUrl: "app/profile/profile-pages/components/add-skill-form.component.html"
})

export class AddSkillComponent {
    public categories = [
        { name: "Cat 1" },
        { name: "Cat 2" },
        { name: "Cat 3" }
    ]
}