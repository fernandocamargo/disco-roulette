import styled from 'styled-components';

import { Release } from 'components/widgets';

export default component => styled(component)`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  position: relative;

  button {
    background-color: red;
    border: none;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-family: 'PT Mono', monospace;
    font-size: 1.5rem;
    padding: 0.5rem 1rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    z-index: 1;
  }

  ${Release} {
    &:not(:last-of-type) {
      display: none;
    }
  }
`;
