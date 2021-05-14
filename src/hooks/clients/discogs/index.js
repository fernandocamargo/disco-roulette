import { create } from 'axios';
import { useMemo } from 'react';

export default () => {
  const user = useMemo(
    () =>
      window.location.pathname
        .trim()
        .toLowerCase()
        .substr(1) || 'pr0n',
    []
  );
  const client = useMemo(
    () =>
      create({
        headers: { 'User-Agent': 'disco-roulette/1.0' },
        baseURL: `https://api.discogs.com/users/${user}`,
        headers: {
          Authorization:
            'Discogs key=CBYXakYdVQNblmGsSsKu, secret=oitbBZUwWnyWNIQZeLagsBAwjcyDosmo',
        },
      }),
    [user]
  );

  return client;
};
