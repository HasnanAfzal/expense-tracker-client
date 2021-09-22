import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { FundSource } from 'src/app/models/fund-source.type';
import { AddEditFundSourceComponent } from './dialog/add-edit-fund-source/add-edit-fund-source.component';

@Component({
  selector: 'app-fund-sources',
  templateUrl: './fund-sources.component.html',
  styleUrls: ['./fund-sources.component.scss']
})
export class FundSourcesComponent implements OnInit {

  fundSources: Array<FundSource> = [];

  constructor(private confirmDialog: ConfirmDialogService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.fundSources.push({
      name: 'ICICI Credit Card',
      _id: '1',
      fundSourceType: {
        _id: '2',
        name: 'Borrowed'
      }
    },
    {
      name: 'GPay',
      _id: '2',
      fundSourceType: {
        _id: '1',
        name: 'Owned'
      }
    },
    {
      name: 'HDFC Credit Card',
      _id: '1',
      fundSourceType: {
        _id: '1',
        name: 'Owned'
      }
    });
  }

  deletePaymentSource(fundSource: FundSource) {
    this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${fundSource.name} payment source?`
      }
    });
  }

  openAddPaymentSource() {
    this.dialog.open(AddEditFundSourceComponent, {
      title: 'Add Payment Source'
    });
  }

  openEditPaymentSource(fundSource: FundSource) {
    this.dialog.open(AddEditFundSourceComponent, {
      title: 'Add Payment Source',
      data: {
        fundSource
      }
    });
  }



}
