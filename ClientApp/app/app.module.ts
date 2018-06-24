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
//import { RoutingConfig  } from "./app.routing";
const routes: Routes = [
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
      , StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
