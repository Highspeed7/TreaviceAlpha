"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RegisterComponent = (function () {
    function RegisterComponent(myElement) {
        this.myElement = myElement;
    }
    RegisterComponent.prototype.registerUser = function (e) {
        e.preventDefault();
        var el = this.myElement.nativeElement;
        // Obtain the token
        while (!el.hasAttribute("ncg-request-verification-token")) {
            el = el.parentElement;
        }
        var token = el.getAttribute("ncg-request-verification-token");
        console.log(el + " " + token); // tslint:disable-line
    };
    RegisterComponent = __decorate([
        core_1.Component({
            templateUrl: "app/register/register.component.html"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map