import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// TODO figure out why 'ngx-bootstrap/table' doesn't work as in other demos
import { TableModule } from '../../../../../src/table';
import { DocsModule } from '../../docs';
import { routes } from './demo-table.routes';
import { DEMO_COMPONENTS } from './demos';
import { TableSectionComponent } from './table-section.component';

@NgModule({
  declarations: [
    TableSectionComponent,
    ...DEMO_COMPONENTS
  ],
  imports: [
    CommonModule,
    FormsModule,
    DocsModule,
    TableModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  exports: [TableSectionComponent],
  entryComponents: [...DEMO_COMPONENTS]
})
export class DemoTableModule {}
