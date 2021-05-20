import React, { Fragment } from 'react';

import { Style } from 'components';
import { Release } from 'components/widgets';

import use from './hooks';

export const renderRelease = release => (
  <Release key={release.id} {...release} />
);

export default ({ className }) => {
  const { releases, shuffle } = use();

  return (
    <Fragment>
      <Style />
      <div className={className}>
        <button onClick={shuffle}>Shuffle</button>
        {releases.map(renderRelease)}
      </div>
    </Fragment>
  );
};
