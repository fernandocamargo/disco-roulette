import React from 'react';

import { Link } from 'components/widgets';

export default ({ id, last, name }) => (
  <Link href={`//discogs.com/artist/${id}`} title={name}>
    {name}
  </Link>
);
