import * as React from 'react';

import SayHello from './SayHello';

function HelloWorld(): React.ReactElement {
  return (
    <div>
      <h1>Hello World!</h1>
      <SayHello compiler="TypeScript" framework="React" />
    </div>
  );
}

export default HelloWorld;
