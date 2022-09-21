import React from 'react';
import './App.css';
import { Button } from './Button/Button';

function App() {
  return (
    <div className="theme-luminum-light">
      <Button label="Primary" primary/>
      <Button label="Secondary"/>
    </div>
  );
}

export default App;
