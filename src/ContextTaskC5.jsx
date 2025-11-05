import React, { useContext } from 'react';
import Store from './ContextTask1';

function ContextTaskC5() {
  const user = useContext(Store);
  return <p>{`Goodbye, ${user}`}</p>;
}

export default ContextTaskC5;
