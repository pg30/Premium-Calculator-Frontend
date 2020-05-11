import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { PremiumFormComponent } from './premium-form/premium-form.component';
import { PremiumQuoteComponent } from './premium-quote/premium-quote.component';
import { CommissionComponent } from './commission/commission.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        ErrorComponent,
        ListVehiclesComponent,
        MenuComponent,
        FooterComponent,
        LogoutComponent,
        PremiumFormComponent,
        PremiumQuoteComponent,
        CommissionComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
