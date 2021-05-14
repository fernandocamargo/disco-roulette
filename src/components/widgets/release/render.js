import React from 'react';

import { Artist, Link } from 'components/widgets';

export const renderArtist = (artist, index) => (
  <li key={index}>
    <Artist {...artist} />
  </li>
);

export default props => {
  const { className, artists, id, title } = props;

  return (
    <article className={className}>
      <dl>
        <dt>Artist(s)</dt>
        <dd>
          <ul>{artists.map(renderArtist)}</ul>
        </dd>
      </dl>
      <dl>
        <dt>Title</dt>
        <dd>
          <Link href={`//discogs.com/release/${id}`} title={title}>
            {title}
          </Link>
        </dd>
      </dl>
    </article>
  );
};
