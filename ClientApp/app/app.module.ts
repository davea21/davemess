import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ModelModule } from "./models/model.module";
import { CategoryFilterComponent } from "./structure/categoryFilter.component";
import { ProductTableComponent } from "./structure/productTable.component";
import { ProductDetailComponent } from "./structure/productDetail.component";
import { RouterModule, Routes } from '@angular/router';
//import { RoutingConfig  } from "./app.routing";
const routes: Routes = [
    { path: "table", component: ProductTableComponent },
    { path: "detail/:id", component: ProductDetailComponent },
    { path: "detail", component: ProductDetailComponent },
    { path: "", component: ProductTableComponent }]
@NgModule({
  declarations: [
      AppComponent, ProductTableComponent, CategoryFilterComponent, ProductDetailComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
