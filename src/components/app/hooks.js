import { create } from 'axios';
import { useCallback, useEffect, useMemo, useState } from 'react';

export const USER = 'pr0n';

export const client = create({
  headers: { 'user-agent': 'ElMundoFrio/1.0' },
  baseURL: 'https://api.discogs.com',
});

export const getFolders = () =>
  client
    .get(`/users/${USER}/collection/folders`)
    .then(({ data: { folders } }) => folders);

export const getReleases = ({
  id,
  url = `/users/${USER}/collection/folders/${id}/releases`,
  stack: current = [],
}) => {
  const check = ({
    data: {
      pagination: {
        urls: { next: pagination },
      },
      releases,
    },
  }) => {
    const next = current.concat(releases);

    return !pagination ? next : getReleases({ stack: next, url: pagination });
  };

  return client.get(url).then(check);
};

export const flatten = (current, next) => current.concat(next);

export const getInitialState = () => ({
  error: null,
  index: null,
  loading: true,
  releases: [],
});

export const update = next => current =>
  Object.assign({}, current, next, { loading: false });

export const random = until => Math.floor(Math.random() * until) + 1 - 1;

export default () => {
  const [state, setState] = useState(getInitialState());
  const fail = useCallback(
    ({ message: error }) => setState(update({ error })),
    []
  );
  const set = useCallback(response => {
    const releases = response.reduce(flatten);
    const index = random(releases.length);

    return setState(update({ index, releases }));
  }, []);
  const succeed = useCallback(
    folders => Promise.all(folders.map(getReleases)).then(set),
    [set]
  );
  const shuffle = useCallback(
    () => setState(update({ index: random(state.releases.length) })),
    [state.releases]
  );
  const release = useMemo(() => state.releases[state.index], [state]);

  useEffect(() => {
    getFolders()
      .then(succeed)
      .catch(fail);
  }, [fail, succeed]);

  return { release, shuffle };
};
