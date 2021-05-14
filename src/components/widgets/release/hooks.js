import { useCallback, useEffect } from 'react';

import { useGetRelease } from 'hooks/services/collection';

export default ({ basic_information }) => {
  const getRelease = useGetRelease();
  const fetch = useCallback(
    () =>
      getRelease(basic_information)
        .then(console.log.bind(console, 'done();'))
        .catch(console.log.bind(console, 'nope();')),
    [basic_information, getRelease]
  );

  useEffect(() => {
    fetch();
  }, [fetch]);

  return basic_information;
};
