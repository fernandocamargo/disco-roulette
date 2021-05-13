import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Root } from 'components';

export default render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.getElementById('root')
);
