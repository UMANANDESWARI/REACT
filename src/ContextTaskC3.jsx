import React, { useContext } from 'react';
import Store from './ContextTask1';
import ContextTaskC4 from './ContextTaskC4';

function ContextTaskC3() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Hello again, ${user}`}</p>
      <ContextTaskC4 />
    </>
  );
}

export default ContextTaskC3;
