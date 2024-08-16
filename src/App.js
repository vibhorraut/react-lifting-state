import React from 'react';
import './App.css';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">React State Lifting</h1>
      <ParentComponent />
    </div>
  );
}

export default App;