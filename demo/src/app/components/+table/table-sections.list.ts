import { ExamplesComponent } from '../../docs/demo-section-components/demo-examples-section';
import { DemoTopSectionComponent } from '../../docs/demo-section-components/demo-top-section';
import { ContentSection } from '../../docs/models/content-section.model';

import { DemoTableBasicComponent } from './demos/basic/basic';

export const demoComponentContent: ContentSection[] = [
  {
    name: 'Usage',
    anchor: 'usage',
    outlet: DemoTopSectionComponent,
    content: {
      doc: require('!!raw-loader!./docs/usage.md')
    }
  },
  {
    name: 'Examples',
    anchor: 'examples',
    outlet: ExamplesComponent,
    content: [
      {
        title: 'Basic',
        anchor: 'basic',
        component: require('!!raw-loader!./demos/basic/basic'),
        html: require('!!raw-loader!./demos/basic/basic.html'),
        outlet: DemoTableBasicComponent
      }
    ]
  }
];
