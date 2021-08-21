import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './home/categories/categories.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './home/items/items.component';
import { PaymentSourcesComponent } from './home/payment-sources/payment-sources.component';
import { SpendingComponent } from './home/spending/spending.component';
import { VendorsComponent } from './home/vendors/vendors.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'register' } },
  { path: 'home', component: HomeComponent, children: [
    { path: 'categories', component: CategoriesComponent },
    { path: 'items', component: ItemsComponent },
    { path: 'vendors', component: VendorsComponent },
    { path: 'paymentsources', component: PaymentSourcesComponent },
    { path: 'spending', component: SpendingComponent },
    { path: 'dashboard', component: DashboardComponent }
  ], data: { animation: 'home' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
