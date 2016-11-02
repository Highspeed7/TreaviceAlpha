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
var listings_search_component_1 = require("./listings-search.component");
var sidenav_module_1 = require("../nav/sidenav.module");
var listings_search_routing_module_1 = require("./listings-search-routing.module");
var ListSearchModule = (function () {
    function ListSearchModule() {
    }
    ListSearchModule = __decorate([
        core_1.NgModule({
            declarations: [
                listings_search_component_1.ListSearchComponent
            ],
            imports: [
                listings_search_routing_module_1.ListSearchRoutingModule,
                sidenav_module_1.SideNavModule
            ],
            exports: [
                listings_search_component_1.ListSearchComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ListSearchModule);
    return ListSearchModule;
}());
exports.ListSearchModule = ListSearchModule;
//# sourceMappingURL=listings-search.module.js.map