///<reference path="./../node_modules/@types/core-js/index.d.ts"/>
import "../Content/site.less";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { Http } from "@angular/http";

import { AppModule } from "./app.module";

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule, [Http]);
