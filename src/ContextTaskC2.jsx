import React, { useContext } from 'react';
import Store from './ContextTask1';
import ContextTaskC3 from './ContextTaskC3';

function ContextTaskC2() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Hello again, ${user}`}</p>
      <ContextTaskC3 />
    </>
  );
}

export default ContextTaskC2;
