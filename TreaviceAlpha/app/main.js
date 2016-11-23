"use strict";
///<reference path="./../node_modules/@types/core-js/index.d.ts"/>
require("../Content/site.less");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_module_1 = require("./app.module");
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [http_1.Http]);
//# sourceMappingURL=main.js.map