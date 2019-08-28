import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterPipe } from './home/filter.pipe';
import { FormsModule } from '@angular/forms';
import { SortByPipe } from './home/sort-by.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PricePipe } from './home/price.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BookComponent } from './book/book.component';
import { ChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    SortByPipe,
    PricePipe,
    LoginComponent,
    RegisterComponent,
    BookComponent,
    NavComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ChartsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
