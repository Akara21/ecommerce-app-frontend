import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ProductsComponent} from './components/products/products.component';
import {ProductDetailComponent} from "./components/products/product-detail/product-detail.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./guards/auth.gurad";
import {SignupComponent} from "./components/signup/signup.component";
import {ShoppingCartComponent} from "./components/shopping-cart/shopping-cart.component";
import {OrderComponent} from "./components/order/order.component";

/**
 * This manages all routes.
 */

const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent
      },
      {
        path: 'shopping-cart',
        component: ShoppingCartComponent,
      },
      {
        path: 'orders',
        component: OrderComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
