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
var landing_routing_module_1 = require("./landing-routing.module");
var listings_search_routing_module_1 = require("../search/listings-search-routing.module");
var landing_component_1 = require("./landing.component");
var LandingModule = (function () {
    function LandingModule() {
    }
    LandingModule = __decorate([
        core_1.NgModule({
            declarations: [landing_component_1.LandingComponent],
            imports: [
                landing_routing_module_1.LandingRoutingModule,
                listings_search_routing_module_1.ListSearchRoutingModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], LandingModule);
    return LandingModule;
}());
exports.LandingModule = LandingModule;
//# sourceMappingURL=landing.module.js.map