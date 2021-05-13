import React, { Fragment } from 'react';

import { Link } from 'components/widgets';

export default ({ id, last, name }) => (
  <Fragment>
    <Link href={`//discogs.com/artist/${id}`} title={name}>
      {name}
    </Link>
    {!last && <span> / </span>}
  </Fragment>
);
