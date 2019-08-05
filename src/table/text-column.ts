// tslint:disable:component-class-suffix
import { CdkTextColumn } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'bs-text-column',
  template: `
    <ng-container bsColumnDef>
      <th bs-header-cell *bsHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td bs-cell *bsCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Default
})
export class BsTextColumn<T> extends CdkTextColumn<T> {
}
