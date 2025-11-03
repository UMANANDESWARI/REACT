import React, { useContext } from 'react';
import Store from './ContextTask1';
import ContextTaskC5 from './ContextTaskC5';

function ContextTaskC4() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Still here, ${user}`}</p>
      <ContextTaskC5 />
    </>
  );
}

export default ContextTaskC4;
