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
import { ItemsComponent } from './home/items/items.component';
import { SpendingComponent } from './home/spending/spending.component';
import { VendorsComponent } from './home/vendors/vendors.component';
import { FundSourcesComponent } from './home/fund-sources/fund-sources.component';
import { MenuComponent } from './home/menu/menu.component';
import { AddEditVendorComponent } from './home/vendors/dialog/add-vendor/add-edit-vendor.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { DialogModule } from './dialog/dialog.module';
import { ViewVendorComponent } from './home/vendors/dialog/view-vendor/view-vendor.component';
import { EditItemComponent } from './home/items/dialog/edit-item/edit-item.component';
import { AddEditFundSourceComponent } from './home/fund-sources/dialog/add-edit-fund-source/add-edit-fund-source.component';
import { LabelsComponent } from './home/labels/labels.component';
import { UnitsComponent } from './home/units/units.component';
import { EditUnitComponent } from './home/units/dialog/edit-unit/edit-unit.component';
import { EditLabelComponent } from './home/labels/dialog/edit-label/edit-label.component';
import { RechargesComponent } from './home/recharges/recharges.component';
import { LoansComponent } from './home/loans/loans.component';
import { AddEditRechargeComponent } from './home/recharges/dialog/add-edit-recharge/add-edit-recharge.component';
import { AddEditLoanComponent } from './home/loans/dialog/add-edit-loan/add-edit-loan.component';
import { PayEmiComponent } from './home/loans/dialog/pay-emi/pay-emi.component';
import { AddFieldComponent } from './shared-components/add-field/add-field.component';
import { AddFieldNameComponent } from './shared-components/add-field/dialog/add-field-name/add-field-name.component';
import { RentLeaseComponent } from './home/rent-lease/rent-lease.component';
import { AddEditBuildingComponent } from './home/rent-lease/dialog/add-edit-building/add-edit-building.component';
import { PayRentComponent } from './home/rent-lease/dialog/pay-rent/pay-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ItemsComponent,
    SpendingComponent,
    FundSourcesComponent,
    VendorsComponent,
    MenuComponent,
    AddEditVendorComponent,
    DashboardComponent,
    ViewVendorComponent,
    EditItemComponent,
    AddEditFundSourceComponent,
    LabelsComponent,
    UnitsComponent,
    EditUnitComponent,
    EditLabelComponent,
    RechargesComponent,
    LoansComponent,
    AddEditRechargeComponent,
    AddEditLoanComponent,
    PayEmiComponent,
    AddFieldComponent,
    AddFieldNameComponent,
    RentLeaseComponent,
    AddEditBuildingComponent,
    PayRentComponent
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
