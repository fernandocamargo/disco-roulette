import { create } from "axios";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";

export const USER = "pr0n";

export const client = create({
  headers: { "user-agent": "ElMundoFrio/1.0" },
  baseURL: "https://api.discogs.com"
});

export const getFolders = () =>
  client
    .get(`/users/${USER}/collection/folders`)
    .then(({ data: { folders } }) => folders);

export const getReleases = ({
  id,
  url = `/users/${USER}/collection/folders/${id}/releases`,
  stack: current = []
}) => {
  const check = ({
    data: {
      pagination: {
        urls: { next: pagination }
      },
      releases
    }
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
  releases: []
});

export const update = (next) => (current) =>
  Object.assign({}, current, next, { loading: false });

export const random = (until) => Math.floor(Math.random() * until) + 1 - 1;

export const Artist = ({ id, name }) => (
  <a
    href={`https://www.discogs.com/artist/${id}`}
    title={name}
    target="_blank"
    rel="noreferrer"
  >
    {name}
  </a>
);

export const renderArtist = (artist, index, { length }) => {
  const last = index === length - 1;

  return (
    <Fragment>
      <Artist key={index} last={last} {...artist} />
      {!last && <span> / </span>}
    </Fragment>
  );
};

export const Release = (props) => {
  const {
    basic_information: { artists, id, title }
  } = props;

  return (
    <div>
      <h1>
        <Fragment>{artists.map(renderArtist)} - </Fragment>
        <a
          href={`https://www.discogs.com/release/${id}`}
          title={title}
          target="_blank"
          rel="noreferrer"
        >
          {title}
        </a>
      </h1>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </div>
  );
};

export default () => {
  const [state, setState] = useState(getInitialState());
  const fail = useCallback(
    ({ message: error }) => setState(update({ error })),
    []
  );
  const set = useCallback((response) => {
    const releases = response.reduce(flatten);
    const index = random(releases.length);

    return setState(update({ index, releases }));
  }, []);
  const succeed = useCallback(
    (folders) => Promise.all(folders.map(getReleases)).then(set),
    [set]
  );
  const shuffle = useCallback(
    () => setState(update({ index: random(state.releases.length) })),
    [state.releases]
  );
  const release = useMemo(() => state.releases[state.index], [state]);

  useEffect(() => {
    getFolders().then(succeed).catch(fail);
  }, [fail, succeed]);

  return (
    <div>
      <button onClick={shuffle}>Shuffle</button>
      {!!release && <Release {...release} />}
    </div>
  );
};
