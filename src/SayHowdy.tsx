import * as React from 'react';

import sayHowdyFunc from './howdyts';

const SayHowdy = (): React.ReactElement => (
    <h2>
      Say howdy and compose the names of both object:
      <div id="howdy">{ sayHowdyFunc() }</div>
    </h2>
);

export { SayHello as default };