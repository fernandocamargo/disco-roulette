import { useCallback } from 'react';

import { useDiscogs } from 'hooks/clients';

export default () => {
  const { get } = useDiscogs();
  const service = useCallback(
    ({ id, url = `/collection/folders/${id}/releases`, stack = [] }) => {
      const check = ({
        data: {
          pagination: {
            urls: { next: pagination },
          },
          releases,
        },
      }) => {
        const next = stack.concat(releases);

        return !pagination ? next : service({ stack: next, url: pagination });
      };

      return get(url).then(check);
    },
    [get]
  );

  return service;
};
