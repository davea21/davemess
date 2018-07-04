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
//import { CategoryFilterComponent } from "./structure/categoryFilter.component";
//import { ProductTableComponent } from "./structure/productTable.component";
//import { ProductDetailComponent } from "./structure/productDetail.component";
var router_1 = require("@angular/router");
var store_module_1 = require("./store/store.module");
var productSelection_component_1 = require("./store/productSelection.component");
var cartDetail_component_1 = require("./store/cartDetail.component");
//import { RoutingConfig  } from "./app.routing";
var checkoutDetails_component_1 = require("./store/checkout/checkoutDetails.component");
var checkoutPayment_component_1 = require("./store/checkout/checkoutPayment.component");
var checkoutSummary_component_1 = require("./store/checkout/checkoutSummary.component");
var checkoutConfirmation_component_1 = require("./store/checkout/checkoutConfirmation.component");
var admin_module_1 = require("./admin/admin.module");
var admin_component_1 = require("./admin/admin.component");
var overview_component_1 = require("./admin/overview.component");
var productAdmin_component_1 = require("./admin/productAdmin.component");
var orderAdmin_component_1 = require("./admin/orderAdmin.component");
var routes = [
    {
        path: "admin", component: admin_component_1.AdminComponent,
        children: [
            {
                path: "products", component: productAdmin_component_1.ProductAdminComponent
            },
            {
                path: "orders", component: orderAdmin_component_1.OrderAdminComponent
            },
            {
                path: "overview", component: overview_component_1.OverviewComponent
            },
            {
                path: "", component: overview_component_1.OverviewComponent
            }
        ]
    },
    {
        path: "checkout/step1", component: checkoutDetails_component_1.CheckoutDetailsComponent
    },
    {
        path: "checkout/step2", component: checkoutPayment_component_1.CheckoutPaymentComponent
    },
    {
        path: "checkout/step3", component: checkoutSummary_component_1.CheckoutSummaryComponent
    },
    {
        path: "checkout/confirmation", component: checkoutConfirmation_component_1.CheckoutConfirmationComponent
    },
    {
        path: "checkout", component: checkoutDetails_component_1.CheckoutDetailsComponent
    },
    {
        path: "cart", component: cartDetail_component_1.CartDetailComponent
    },
    { path: "store", component: productSelection_component_1.ProductSelectionComponent },
    { path: "", component: productSelection_component_1.ProductSelectionComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                model_module_1.ModelModule,
                router_1.RouterModule.forRoot(routes, { enableTracing: true } // <-- debugging purposes only
                ),
                store_module_1.StoreModule, admin_module_1.AdminModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map