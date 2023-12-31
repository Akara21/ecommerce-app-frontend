import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/modules/material/material.module';
import {HomeComponent} from './components/home/home.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductCardComponent} from './components/products/product-card/product-card.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ProductDetailComponent} from "./components/products/product-detail/product-detail.component";
import {LoginComponent} from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {ShoppingCartComponent} from './components/shopping-cart/shopping-cart.component';
import {
  ShoppingCartSummaryComponent
} from './components/shopping-cart/shopping-cart-summary/shopping-cart-summary.component';
import {ShoppingCartItemComponent} from './components/shopping-cart/shopping-cart-item/shopping-cart-item.component';
import {AuthInterceptor} from "./shared/interceptors/AuthInterceptor";
import {OrderComponent} from './components/order/order.component';
import {DatePipe} from "@angular/common";
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {OrderHistoryComponent} from './components/order/order-history/order-history.component';
import {OrderListComponent} from './components/order/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    ProductCardComponent,
    ProductDetailComponent,
    CategoriesComponent,
    SearchBarComponent,
    LoginComponent,
    SignupComponent,
    ShoppingCartComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartItemComponent,
    OrderComponent,
    ConfirmationDialogComponent,
    OrderHistoryComponent,
    OrderListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
