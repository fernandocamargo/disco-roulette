import React, { Fragment } from 'react';

import { Style } from 'components';
import { Release } from 'components/widgets';

import use from './hooks';

export default ({ className }) => {
  const { release, shuffle } = use();

  return (
    <Fragment>
      <Style />
      <div className={className}>
        {!!release && (
          <Fragment>
            <button onClick={shuffle}>Shuffle</button>
            <Release {...release} />
          </Fragment>
        )}
      </div>
    </Fragment>
  );
};
