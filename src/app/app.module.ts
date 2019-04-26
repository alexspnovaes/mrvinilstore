import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { LoadingModule } from 'ngx-loading';
// Rotas
import { Routing, RoutingProviders } from './app.routing';

// Root
import { AppComponent } from './app.component';

// Shared
import { HeadbarComponent } from './components/shared/headbar/headbar.component';
import { SubMenuComponent } from './components/shared/sub-menu/sub-menu.component';
import { FooterComponent } from './components/shared/footer/footer.component';

// Components
import { ProductListComponent } from './components/product-list/product-list.component';

// Pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { OrderPageComponent} from './pages/orders-page/orders-page.component';
// Services
import { CartService } from './services/cart.service';
import { AuthService } from './services/auth.service';
import { DataService } from './services/data.service';

// Directives
import { NumberDirective } from './directives/number.directive';


@NgModule({
  declarations: [
    NumberDirective,
    AppComponent,
    HeadbarComponent,
    SubMenuComponent,
    ProductListComponent,
    FooterComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    CartPageComponent,
    OrderPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    InfiniteScrollModule,
    LoadingModule
  ],
  providers: [CartService, AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
