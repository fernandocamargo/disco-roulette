import React, { Fragment } from 'react';

import { Artist, Link } from 'components/widgets';

export const renderArtist = (artist, index, { length }) => {
  const last = index === length - 1;

  return <Artist key={index} last={last} {...artist} />;
};

export default props => {
  const {
    basic_information: { artists, id, title },
  } = props;

  return (
    <div>
      <h1>
        <Fragment>{artists.map(renderArtist)} - </Fragment>
        <Link href={`//discogs.com/release/${id}`} title={title}>
          {title}
        </Link>
      </h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};
