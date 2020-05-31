import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { PremiumFormComponent } from './premium-form/premium-form.component';
import { PremiumQuoteComponent } from './premium-quote/premium-quote.component';
import { CommissionComponent } from './commission/commission.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
    { path: 'home/:name', component: HomeComponent, canActivate: [RouteGuardService] },
    { path: 'vehicles', component: ListVehiclesComponent, canActivate: [RouteGuardService] },
    { path: 'calculate/:id/:name', component: PremiumFormComponent, canActivate: [RouteGuardService] },
    { path: 'quote', component: PremiumQuoteComponent, canActivate: [RouteGuardService] },
    { path: 'commission', component: CommissionComponent, canActivate: [RouteGuardService] },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
