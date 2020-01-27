import * as React from 'react';

import signoff from './signoff';

const SaySignoff = (): React.ReactElement => (
  <h2>
    Bye Bye from
    {` ${signoff.who}`}
    .  Quote:
    {` ${signoff.quote}`}
  </h2>
);

export { SaySignoff as default };
