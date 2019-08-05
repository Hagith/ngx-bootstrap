// tslint:disable:directive-class-suffix
// tslint:disable:component-class-suffix
// tslint:disable:max-classes-per-file
import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef
} from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, ViewEncapsulation } from '@angular/core';

@Directive({
  selector: '[bsHeaderRowDef]',
  providers: [{ provide: CdkHeaderRowDef, useExisting: BsHeaderRowDef }],
  inputs: ['columns: bsHeaderRowDef']
})
export class BsHeaderRowDef extends CdkHeaderRowDef {
}

@Directive({
  selector: '[bsFooterRowDef]',
  providers: [{ provide: CdkFooterRowDef, useExisting: BsFooterRowDef }],
  inputs: ['columns: bsFooterRowDef']
})
export class BsFooterRowDef extends CdkFooterRowDef {
}

@Directive({
  selector: '[bsRowDef]',
  providers: [{ provide: CdkRowDef, useExisting: BsRowDef }],
  inputs: ['columns: bsRowDefColumns']
})
export class BsRowDef<T> extends CdkRowDef<T> {
}

@Component({
  selector: 'bs-header-row, tr[bs-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'bs-header-row',
    role: 'row'
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'bsHeaderRow',
  providers: [{ provide: CdkHeaderRow, useExisting: BsHeaderRow }]
})
export class BsHeaderRow extends CdkHeaderRow {
}

@Component({
  selector: 'bs-footer-row, tr[bs-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'bs-footer-row',
    role: 'row'
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'bsFooterRow',
  providers: [{ provide: CdkFooterRow, useExisting: BsFooterRow }]
})
export class BsFooterRow extends CdkFooterRow {
}

@Component({
  selector: 'bs-row, tr[bs-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    class: 'bs-row',
    role: 'row'
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'bsRow',
  providers: [{ provide: CdkRow, useExisting: BsRow }]
})
export class BsRow extends CdkRow {
}
