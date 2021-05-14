import get from 'lodash/get';
import last from 'lodash/last';
import { useCallback, useEffect, useMemo, useState } from 'react';

import {
  useGetFolders,
  useGetRelease,
  useGetReleases,
} from 'hooks/services/collection';

import { flatten, random } from './helpers';
import { getInitialState, merge } from './reducers';

export default () => {
  const [state, setState] = useState(getInitialState());
  const getFolders = useGetFolders();
  const getRelease = useGetRelease();
  const getReleases = useGetReleases();
  const fail = useCallback(({ message: error }) => console.log({ error }), []);
  const succeed = useCallback(
    folders =>
      Promise.all(folders.map(getReleases)).then(response => {
        const releases = response.reduce(flatten);
        const index = random(releases.length);
        const {
          [index]: { basic_information },
        } = releases;

        return getRelease(basic_information).then(release =>
          setState(merge({ release, releases }))
        );
      }),
    [getRelease, getReleases]
  );
  const shuffle = useCallback(() => {
    const index = random(state.releases.length);
    const {
      [index]: { basic_information },
    } = state.releases;

    return getRelease(basic_information).then(release =>
      setState(merge({ release }))
    );
  }, [state.releases, getRelease]);
  const fetch = useCallback(
    () =>
      getFolders()
        .then(succeed)
        .catch(fail),
    [fail, getFolders, succeed]
  );
  const release = useMemo(() => get(state.release, last(state.history)), [
    state.history,
    state.release,
  ]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return { release, shuffle };
};
