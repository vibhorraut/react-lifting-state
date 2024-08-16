import React, { useState } from 'react';
import ChildComponent1 from './ChildComponent1';
import ChildComponent2 from './ChildComponent2';

function ParentComponent() {
  const [sharedState, setSharedState] = useState(0);

  return (
    <div className="card p-3">
      <ChildComponent1 state={sharedState} setState={setSharedState} />
      <ChildComponent2 state={sharedState} />
    </div>
  );
}

export default ParentComponent;