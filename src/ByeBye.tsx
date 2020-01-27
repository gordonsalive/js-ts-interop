import * as React from 'react';

import SaySignoff from './SaySignoff';

function ByeBye(): React.ReactElement {
  return (
    <div>
      <h1>
        Bye Bye!
      </h1>
      <SaySignoff />
    </div>
  );
}

export default ByeBye;