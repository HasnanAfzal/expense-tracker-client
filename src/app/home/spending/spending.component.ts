import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { filterArr } from 'src/app/helpers/common';
import { requireMatch } from 'src/app/helpers/requireMatch';
import { Item } from 'src/app/models/Item.type';
import { Label } from 'src/app/models/label.type';
import { FundSource } from 'src/app/models/fund-source.type';
import { Unit } from 'src/app/models/unit.type';
import { Vendor } from 'src/app/models/vendor.type';

@Component({
  selector: 'app-spending',
  templateUrl: './spending.component.html',
  styleUrls: ['./spending.component.scss']
})
export class SpendingComponent {

  //   createSpendingForm: FormGroup = this.formBuilder.group({
  //     spendingDate: this.formBuilder.control(new Date(), Validators.required),
  //     vendor: this.formBuilder.control(null, [Validators.required, requireMatch]),
  //     referredVendor: this.formBuilder.control(null),
  //     labels: this.formBuilder.control(null),
  //     items: this.formBuilder.array([
  //       this.formBuilder.group({
  //         name: new FormControl(null, [Validators.required, requireMatch]),
  //         units: new FormControl(null),
  //         quantity: new FormControl(null),
  //         singleUnitPrice: new FormControl(null),
  //         amount: new FormControl(null, Validators.required)
  //       })
  //     ]),
  //     packingCharges: new FormControl(null),
  //     deliveryCharges: new FormControl(null),
  //     totalAmount: new FormControl(null, Validators.required),
  //     emi: this.formBuilder.group({
  //       name: this.formBuilder.control(null),
  //       duration: this.formBuilder.control(null),
  //       startDate: this.formBuilder.control(null),
  //       amount: this.formBuilder.control(null)
  //     }),
  //     paymentSource: this.formBuilder.control(null, [Validators.required, requireMatch])
  //   });

  //   vendors: Array<Vendor> = [{
  //     name: 'Flipkart',
  //     _id: '1'
  //   }, {
  //     name: 'Amazon',
  //     _id: '2'
  //   }, {
  //     name: 'SM Mart',
  //     _id: '3'
  //   }]

  //   filteredVendors: Array<Vendor> = [];

  //   tabs: Array<string> = ['Item1'];

  //   selectedTabIndex = -1;

  //   items: Array<Item> = [{
  //     _id: '1',
  //     name: 'Apple'
  //   }, {
  //     _id: '2',
  //     name: 'Mango'
  //   }]

  //   filteredItems!: { [key : string]: Array<Item> };

  //   units: Array<Unit> = [{
  //     _id: '1',
  //     name: 'KG'
  //   }, {
  //     _id: '2',
  //     name: 'Plate'
  //   }];

  //   filteredUnits!: { [key: string]: Array<Unit> };

  //   labels: Array<Label> = [{
  //     name: 'Hotels',
  //     _id: '1'
  //   }, {
  //     name: 'Groming',
  //     _id: '2'
  //   }, {
  //     name: 'Food',
  //     _id: '3'
  //   }]

  //   fundSources: Array<FundSource> = [{
  //     name: 'ICICI Credit Card',
  //     _id: '1',
  //     paymentSourceType: {
  //       name: 'Borrowed',
  //       _id: '1'
  //     }
  //   },
  //   {
  //     name: 'HDFC Debit Card',
  //     _id: '2',
  //     paymentSourceType: {
  //       name: 'Owned',
  //       _id: '2'
  //     }
  //   },
  //   {
  //     name: 'Cash',
  //     _id: '3',
  //     paymentSourceType: {
  //       name: 'Owned',
  //       _id: '3'
  //     }
  //   }]

  //   filteredFundSources: Array<FundSource> = this.fundSources;

  //   nonEmiTransaction: boolean = true;

  //   onEmiTransactionChange() {
  //     this.nonEmiTransaction = !this.nonEmiTransaction;
  //     if (this.nonEmiTransaction) {
  //       this.createSpendingForm.get('emi')?.clearValidators();
  //     } else {
  //       this.createSpendingForm.get('emi')?.setValidators(Validators.required);
  //     }
  //   }

  //   getControls() {
  //     return (this.createSpendingForm.get('items') as FormArray).controls as Array<FormGroup>;
  //   }

  //   getItemFormGroup(itemFormGroup: any) {
  //     return itemFormGroup as FormGroup;
  //   }

  //   onAddTabClick(event: MouseEvent) {
  //     event.preventDefault();
  //     const itemsArray = this.createSpendingForm.controls.items as FormArray;
  //     const arrLength = itemsArray.length;

  //     const newItemGroup: FormGroup = this.formBuilder.group({
  //       name: new FormControl(null, [Validators.required, requireMatch]),
  //       units: new FormControl(null),
  //       quantity: new FormControl(null),
  //       singleUnitPrice: new FormControl(null),
  //       amount: new FormControl(null, Validators.required)
  //     });

  //     itemsArray.insert(arrLength, newItemGroup);

  //     this.selectedTabIndex = arrLength;

  //     this.filteredItems[arrLength] = [...this.items];
  //     this.filteredUnits[arrLength] = [...this.units];

  //     newItemGroup.get('name')?.valueChanges.subscribe((value: string) => {
  //       this.filteredItems[arrLength] = this.filterArr(value, this.items);
  //     });

  //     newItemGroup.get('units')?.valueChanges.subscribe((value: string) => {
  //       this.filteredUnits[arrLength] = this.filterArr(value, this.units);
  //     });

  //   }

  //   onCloseTabClick(event: MouseEvent, index: number) {
    
    
  //     if (index === 0) {
  //       return;
  //     }

  //     // event.preventDefault();
  //     // event.stopPropagation();

  //     const itemsArray = this.createSpendingForm.controls.items as FormArray;
  //     itemsArray.removeAt(index);


  //     this.selectedTabIndex = index - 1;
    
  //   }

  //   displayProperty(value: any): string {
  //     if (value) {
  //       return value.name;
  //     }
  //     return '';
  //   }

  //   filteredReferredVendors: Array<Vendor> = [];

  //   constructor(private formBuilder: FormBuilder) { }

  //   ngOnInit(): void {
  //     this.filteredVendors = this.vendors;
  //     this.filteredReferredVendors = [...this.vendors];

  //     this.filteredItems = {
  //       '0': this.items
  //     };

  //     this.filteredUnits = {
  //       '0': this.units
  //     };



  //     this.createSpendingForm.controls.vendor.valueChanges.subscribe((value: string) => {
  //       this.filteredVendors = this.filterArr(value, this.vendors);
  //     });
  //     this.createSpendingForm.controls.referredVendor.valueChanges.subscribe((value: string) => {
  //       this.filteredReferredVendors = this.filterArr(value, this.vendors);
  //     });
  //     const firstItemFormGroup = (this.createSpendingForm.controls.items as FormArray).controls[0];
  //     firstItemFormGroup.get('name')?.valueChanges.subscribe((value: string) => {
  //       this.filteredItems[0] = this.filterArr(value, this.items);
  //     });
  //     firstItemFormGroup.get('units')?.valueChanges.subscribe((value: string) => {
  //       this.filteredUnits[0] = this.filterArr(value, this.units);
  //     });

  //     this.createSpendingForm.get('paymentSource')?.valueChanges.subscribe((value: string) => {
  //       this.filteredFundSources = filterArr(value, this.fundSources);
  //     });

  //   }

  //   filterArr(value: string, arr: Array<any>): Array<any> {
  //     if (typeof value === 'string') {
  //       return arr.filter(a => a.name.toLowerCase().includes(value.trim().toLowerCase()));
  //     }
  //     return arr;
  //   }

  //   onSubmit() {
  //     const itemsGroup = (this.createSpendingForm.controls.items as FormArray).controls;

  //     for (let index = 0; index < itemsGroup.length; index++) {
  //       const itemGroup = itemsGroup[index];
  //       if(itemGroup.invalid) {
  //         itemGroup.markAllAsTouched();
  //         this.selectedTabIndex = index;
  //         break;
  //       }
      
  //     }

  //     // if (!this.nonEmiTransaction) {
  //     //   this.createSpendingForm.get('emi')?.markAllAsTouched();
  //     // }

  //   }

}
