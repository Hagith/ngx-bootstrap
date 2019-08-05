import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { BsCell, BsCellDef, BsColumnDef, BsFooterCell, BsFooterCellDef, BsHeaderCell, BsHeaderCellDef } from './cell';
import { BsFooterRow, BsFooterRowDef, BsHeaderRow, BsHeaderRowDef, BsRow, BsRowDef } from './row';
import { TableComponent } from './table.component';
import { BsTextColumn } from './text-column';

const EXPORTED_DECLARATIONS = [
  // Table
  TableComponent,

  // Template defs
  BsHeaderCellDef,
  BsHeaderRowDef,
  BsColumnDef,
  BsCellDef,
  BsRowDef,
  BsFooterCellDef,
  BsFooterRowDef,

  // Cell directives
  BsHeaderCell,
  BsCell,
  BsFooterCell,

  // Row directives
  BsHeaderRow,
  BsRow,
  BsFooterRow,

  BsTextColumn
];

@NgModule({
  imports: [CommonModule, CdkTableModule],
  exports: EXPORTED_DECLARATIONS,
  declarations: EXPORTED_DECLARATIONS
})
export class TableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TableModule,
      providers: []
    };
  }
}
