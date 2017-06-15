import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewChild
} from '@angular/core';
import {
  SohoDataGridComponent,
} from '@infor/sohoxi-angular';
import {
  PAGING_COLUMNS,
  PAGING_DATA
} from './datagrid-paging-data';
import { SohoIconUtils } from '../../soho/utils/soho-icon.utils';

@Component({
  selector: 'soho-datagrid-standard-formatter-demo',
  templateUrl: './datagrid-standard-formatter.demo.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataGridStandardFormatterDemoComponent implements AfterViewInit {
  @ViewChild(SohoDataGridComponent) sohoDataGridComponent: SohoDataGridComponent;

  ngAfterViewInit(): void {
    /**
     * Add a column for the custom formatter
     */
    const statusColumn = {
      id: 'status',
      name: 'Status',
      field: 'status',
      width: 100,
      formatter: Formatters.Alert,
      options: [
        { id: 'Active',  value: 'Active',  label: 'Active' },
        { id: 'Inactive', value: 'Inactive', label: 'Inactive' },
        { id: 'Late',    value: 'Late',    label: 'Late' },
        { id: 'On Hold', value: 'On Hold', label: 'On Hold' }
      ],
      ranges: [
        { 'value': 'Active',  'classes': 'confirm', text: 'Active' },
        { 'value': 'Inactive', 'classes': 'alert',  text: 'Inactive' },
        { 'value': 'Late',    'classes': 'error',   text: 'Late' },
        { 'value': 'On Hold', 'classes': 'info',    text: 'On Hold' },
      ]
    };

    const columns = [ ...PAGING_COLUMNS, statusColumn ];

    const gridOptions: SohoDataGridOptions = <SohoDataGridOptions> {
      columns: columns,
      dataset: PAGING_DATA,
      selectable: 'single',
      paging: true,
      pagesize: 10
    };

    this.sohoDataGridComponent.gridOptions = gridOptions;
  }
}