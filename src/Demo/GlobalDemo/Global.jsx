import { useState } from 'react';
import ChildComponentA from './ComponentA';
import ChildComponentB from './ComponentB';
import ChildComponentC from './ComponentC';
import ChildComponentD from './ComponentD';

export default function Global() {
  const [cVisibility, setCVisibility] = useState(true);
  return (
    <>
      <button onClick={() => setCVisibility(!cVisibility)}>{cVisibility ? 'Hide ComponentA' : 'Show ComponentA'}</button>
      {cVisibility && <ChildComponentA />}
      <ChildComponentB />
      <ChildComponentC />
      <ChildComponentD />
    </>
  );
}

