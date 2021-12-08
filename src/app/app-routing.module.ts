import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './home/items/items.component';
import { LabelsComponent } from './home/labels/labels.component';
import { LoansComponent } from './home/loans/loans.component';
import { FundSourcesComponent } from './home/fund-sources/fund-sources.component';
import { RechargesComponent } from './home/recharges/recharges.component';
import { SpendingComponent } from './home/spending/spending.component';
import { UnitsComponent } from './home/units/units.component';
import { VendorsComponent } from './home/vendors/vendors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RentLeaseComponent } from './home/rent-lease/rent-lease.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
  { path: 'home', component: HomeComponent, children: [
    { path: 'items', component: ItemsComponent },
    { path: 'vendors', component: VendorsComponent },
    { path: 'fundsources', component: FundSourcesComponent },
    { path: 'spending', component: SpendingComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'units', component: UnitsComponent },
    { path: 'labels', component: LabelsComponent },
    { path: 'recharges', component: RechargesComponent },
    { path: 'loans', component: LoansComponent },
    { path: 'rent-lease', component: RentLeaseComponent }
  ], data: { animation: 'home' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
