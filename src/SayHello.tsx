import * as React from 'react';

import { HelloProps } from './HelloProps';
import howdyDivFunc from './howdyts';

const SayHello = ({ compiler, framework }: HelloProps): React.ReactElement => (
  <div>
    <h2>
      Hello from
      { ` ${compiler} ` }
      and
      { ` ${framework} ` }
      !
    </h2>
    <h2>
      Say howdy and compose the names of both object:
      <div id="howdy">-</div>
      { howdyDivFunc() }
    </h2>
  </div>
);

export { SayHello as default };
