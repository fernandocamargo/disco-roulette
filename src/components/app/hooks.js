import { useCallback, useEffect, useMemo, useState } from 'react';

import { useGetFolders, useGetReleases } from 'hooks/services/collection';

import { flatten, random } from './helpers';
import { getInitialState, merge } from './reducers';

export default () => {
  const [state, setState] = useState(getInitialState());
  const getFolders = useGetFolders();
  const getReleases = useGetReleases();
  const fail = useCallback(
    ({ message: error }) => setState(merge({ error })),
    []
  );
  const set = useCallback(response => {
    const releases = response.reduce(flatten);
    const index = random(releases.length);

    return setState(merge({ index, releases }));
  }, []);
  const succeed = useCallback(
    folders => Promise.all(folders.map(getReleases)).then(set),
    [getReleases, set]
  );
  const shuffle = useCallback(
    () => setState(merge({ index: random(state.releases.length) })),
    [state.releases]
  );
  const fetch = useCallback(
    () =>
      getFolders()
        .then(succeed)
        .catch(fail),
    [fail, getFolders, succeed]
  );
  const release = useMemo(() => state.releases[state.index], [
    state.index,
    state.releases,
  ]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { release, shuffle };
};
