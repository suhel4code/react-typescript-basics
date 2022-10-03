// import React from 'react';

import { Child, ChildFc } from './Child';

function Parent() {
  return (
    <>
      <h1>Parent</h1>
      {/* <Child color='red' onClick={() => console.log('clicked')}>
        adad
      </Child> */}
      <ChildFc color='red with fc' onClick={() => console.log('clicked')}>
        adfadf
      </ChildFc>
    </>
  );
}

export default Parent;
