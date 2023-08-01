import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductService} from "./components/product/product.service";
import {Routes, RouterModule, Router} from "@angular/router";
import { ProductCategoryMenuComponent } from './components/product/product-category-menu/product-category-menu.component';
import {ProductCategoryService} from "./components/product/product-category-menu/product-category.service";
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'search/:keyword', component: ProductListComponent},
  {path: 'category/:id', component: ProductListComponent},
  {path: 'products/:id', component: ProductDetailsComponent},
  {path: 'category', component: ProductListComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'product-category/:id', component: ProductCategoryMenuComponent},
  {path: 'product-category', component: ProductCategoryMenuComponent},
  {path: '', redirectTo: 'products', pathMatch: 'full'}, // Add ErrorNoPageFound component
  {path: '**', redirectTo: 'products', pathMatch: 'full'} // Add PageDoesNotExist component
]
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCategoryMenuComponent,
    SearchComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ProductService, ProductCategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
