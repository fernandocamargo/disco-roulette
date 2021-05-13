import React from 'react';

import { Release } from 'components/widgets';

import use from './hooks';

export default () => {
  const { release, shuffle } = use();

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      {!!release && <Release {...release} />}
    </div>
  );
};
