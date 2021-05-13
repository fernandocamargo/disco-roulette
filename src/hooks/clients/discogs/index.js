import { create } from 'axios';
import { useMemo } from 'react';

export default () => {
  const client = useMemo(
    () =>
      create({
        headers: { 'user-agent': 'disco-roulette/1.0' },
        baseURL: 'https://api.discogs.com',
      }),
    []
  );

  return client;
};
