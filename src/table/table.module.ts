import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, CdkTableModule],
  exports: [
    CdkTableModule, // TODO remove after providing all overrides of cdk components/directives
    TableComponent
  ],
  declarations: [TableComponent]
})
export class TableModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TableModule,
      providers: []
    };
  }
}
