import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ContentSection } from '../../docs/models/content-section.model';
import { demoComponentContent } from './table-sections.list';

@Component({
  selector: 'table-section',
  templateUrl: './table-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableSectionComponent {
  name = 'Table';
  src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/table';
  componentContent: ContentSection[] = demoComponentContent;
}
