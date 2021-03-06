import { useCallback } from 'react';

import { useDiscogs } from 'hooks/clients';

import { format } from './helpers';

export default () => {
  const { get } = useDiscogs();
  const service = useCallback(() => get('/collection/folders').then(format), [
    get,
  ]);

  return service;
};
