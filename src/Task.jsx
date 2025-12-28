import React, { useState, createContext, useContext } from 'react';

const Store = createContext();

function Component1() {
  const [user] = useState('Uma');
  return (
    <Store.Provider value={user}>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 />
    </Store.Provider>
  );
}

function Component2() {
const user = useContext(Store);
  return (
    <>
        <p>{`Hello again, ${user}`}</p>
      <Component3 />
    </>
  );
}

function Component3() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Hello again, ${user}`}</p>
      <Component4 />
    </>
  );
}

function Component4() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Still here, ${user}`}</p>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(Store);
  return (
    <>
      <p>{`Goodbye, ${user}`}</p>
    </>
  );
}

function Task() {
  return <Component1 />;
}


export default Task;