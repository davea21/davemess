import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
//import { CategoryFilterComponent } from "./structure/categoryFilter.component";
//import { ProductTableComponent } from "./structure/productTable.component";
//import { ProductDetailComponent } from "./structure/productDetail.component";
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from './store/store.module';
import { ProductSelectionComponent } from './store/productSelection.component';
import { CartDetailComponent } from "./store/cartDetail.component";
//import { RoutingConfig  } from "./app.routing";
import { CheckoutDetailsComponent } from "./store/checkout/checkoutDetails.component";
import { CheckoutPaymentComponent } from "./store/checkout/checkoutPayment.component";
import { CheckoutSummaryComponent } from "./store/checkout/checkoutSummary.component";
import { CheckoutConfirmationComponent } from "./store/checkout/checkoutConfirmation.component";
import { AdminModule } from "./admin/admin.module";
import { AdminComponent } from "./admin/admin.component";
import { OverviewComponent } from "./admin/overview.component";
import { ProductAdminComponent } from "./admin/productAdmin.component";
import { OrderAdminComponent } from "./admin/orderAdmin.component";
const routes: Routes = [
    {
        path: "admin", component: AdminComponent,
        children: [
            {
                path: "products", component : ProductAdminComponent
            },
            {
                path: "orders" , component : OrderAdminComponent
            },
            {
                path : "overview", component : OverviewComponent
            },
            {

                path: "", component: OverviewComponent
            }
        ]
    },
    {
        path: "checkout/step1", component: CheckoutDetailsComponent
    },
    {
        path: "checkout/step2", component: CheckoutPaymentComponent
    },
    {
        path: "checkout/step3", component: CheckoutSummaryComponent
    },
    {
        path: "checkout/confirmation", component: CheckoutConfirmationComponent
    },
    {
        path: "checkout", component: CheckoutDetailsComponent
    },
    {
        path: "cart", component: CartDetailComponent
    },

    { path: "store", component: ProductSelectionComponent },
   
    { path: "", component: ProductSelectionComponent }]

@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
      HttpModule,
      ModelModule,
   
      RouterModule.forRoot(
          routes,
          { enableTracing: true } // <-- debugging purposes only
          
      )
      , StoreModule, AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
