import React from 'react';

function ChildComponent1({ state, setState }) {
  return (
    <div className="mb-3">
      <p className="lead">Child 1: {state}</p>
      <button className="btn btn-primary" onClick={() => setState(state + 1)}>
        Increase
      </button>
    </div>
  );
}

export default ChildComponent1;