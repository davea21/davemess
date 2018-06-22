"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var model_module_1 = require("./models/model.module");
var categoryFilter_component_1 = require("./structure/categoryFilter.component");
var productTable_component_1 = require("./structure/productTable.component");
var productDetail_component_1 = require("./structure/productDetail.component");
var router_1 = require("@angular/router");
//import { RoutingConfig  } from "./app.routing";
var routes = [
    { path: "table", component: productTable_component_1.ProductTableComponent },
    { path: "detail/:id", component: productDetail_component_1.ProductDetailComponent },
    { path: "detail", component: productDetail_component_1.ProductDetailComponent },
    { path: "", component: productTable_component_1.ProductTableComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent, productTable_component_1.ProductTableComponent, categoryFilter_component_1.CategoryFilterComponent, productDetail_component_1.ProductDetailComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                model_module_1.ModelModule,
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map