import { create } from 'axios';
import { useMemo } from 'react';

import { identify } from './helpers';

export default () => {
  const client = useMemo(
    () =>
      create({
        headers: {
          Authorization:
            'Discogs key=CBYXakYdVQNblmGsSsKu, secret=oitbBZUwWnyWNIQZeLagsBAwjcyDosmo',
          'User-Agent': 'disco-roulette/1.0',
        },
        baseURL: `https://corsproxy.io/?https://api.discogs.com/users/${identify()}`,
      }),
    []
  );

  return client;
};
