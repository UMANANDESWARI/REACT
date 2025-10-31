import React, { useState } from 'react';
import Store from './ContextTask1';
import ContextTaskC2 from './ContextTaskC2';

function ContextTaskC1() {
  const [user] = useState('React');

  return (
    <Store.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <ContextTaskC2 />
    </Store.Provider>
  );
}

export default ContextTaskC1;
