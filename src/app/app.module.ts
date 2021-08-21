import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { ItemsComponent } from './home/items/items.component';
import { SpendingComponent } from './home/spending/spending.component';
import { VendorsComponent } from './home/vendors/vendors.component';
import { PaymentSourcesComponent } from './home/payment-sources/payment-sources.component';
import { MenuComponent } from './home/menu/menu.component';
import { AddEditVendorComponent } from './home/vendors/dialog/add-vendor/add-edit-vendor.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { PlaceHolderDirective } from './shared-directives/place-holder.directive';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CategoriesComponent,
    ItemsComponent,
    SpendingComponent,
    PaymentSourcesComponent,
    VendorsComponent,
    MenuComponent,
    AddEditVendorComponent,
    DashboardComponent,
    PlaceHolderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  

}
