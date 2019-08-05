// tslint:disable:directive-class-suffix
// tslint:disable:no-input-rename
// tslint:disable:max-classes-per-file
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef
} from '@angular/cdk/table';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[bsCellDef]',
  providers: [{ provide: CdkCellDef, useExisting: BsCellDef }]
})
export class BsCellDef extends CdkCellDef {}

@Directive({
  selector: '[bsHeaderCellDef]',
  providers: [{ provide: CdkHeaderCellDef, useExisting: BsHeaderCellDef }]
})
export class BsHeaderCellDef extends CdkHeaderCellDef {}

@Directive({
  selector: '[bsFooterCellDef]',
  providers: [{ provide: CdkFooterCellDef, useExisting: BsFooterCellDef }]
})
export class BsFooterCellDef extends CdkFooterCellDef {}

@Directive({
  selector: '[bsColumnDef]',
  providers: [
    { provide: CdkColumnDef, useExisting: BsColumnDef },
    { provide: 'MAT_SORT_HEADER_COLUMN_DEF', useExisting: BsColumnDef }
  ]
})
export class BsColumnDef extends CdkColumnDef {
  @Input('bsColumnDef') name: string;
}

@Directive({
  selector: 'bs-header-cell, th[bs-header-cell]',
  host: {
    class: 'bs-header-cell',
    role: 'columnheader'
  }
})
export class BsHeaderCell extends CdkHeaderCell {}

@Directive({
  selector: 'bs-footer-cell, td[bs-footer-cell]',
  host: {
    class: 'bs-footer-cell',
    role: 'gridcell'
  }
})
export class BsFooterCell extends CdkFooterCell {}

@Directive({
  selector: 'bs-cell, td[bs-cell]',
  host: {
    class: 'bs-cell',
    role: 'gridcell'
  }
})
export class BsCell extends CdkCell {}
