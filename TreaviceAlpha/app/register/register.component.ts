import { Component, ElementRef} from "@angular/core";

@Component({
    templateUrl: "app/register/register.component.html"
})

export class RegisterComponent {
    constructor(private myElement: ElementRef) {  }
    public registerUser(e: Event) {
        e.preventDefault();

        let el = this.myElement.nativeElement;

        // Obtain the token
        while (!el.hasAttribute("ncg-request-verification-token")) {
            el = el.parentElement;
        }
        const token = el.getAttribute("ncg-request-verification-token");
        console.log(el + " " + token); // tslint:disable-line
    }
}
