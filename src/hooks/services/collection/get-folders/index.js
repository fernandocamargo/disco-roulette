import { useCallback } from 'react';

import { useDiscogs } from 'hooks/clients';

export default () => {
  const { get } = useDiscogs();
  const service = useCallback(() => get(), []);
};
