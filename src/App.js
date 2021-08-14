import React from 'react';
import './App.css';
import Stars from './Stars';

function App() {
  return (
    <>
      <Stars count={5} />
      <Stars count={4} />
      <Stars count={3} />
      <Stars count={2} />
      <Stars count={1} />
      <Stars />
    </>
  );
}

export default App;
