import { useCallback } from 'react';

import { useDiscogs } from 'hooks/clients';

import { format } from './helpers';

export default () => {
  const { get } = useDiscogs();
  const service = useCallback(
    ({ resource_url }) => get(resource_url).then(format),
    [get]
  );

  return service;
};
