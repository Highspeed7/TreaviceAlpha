"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var search_component_1 = require("./search/search.component");
exports.routing = router_1.RouterModule.forRoot([
    { path: "", component: home_component_1.HomeComponent },
    { path: "search", component: search_component_1.SearchComponent }
]);
//# sourceMappingURL=app.routing.js.map