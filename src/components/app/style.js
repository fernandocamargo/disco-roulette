import styled from 'styled-components';

export default component => styled(component)`
  align-items: center;
  display: flex;
  height: calc(100% - 10rem);
  justify-content: center;
  padding: 5rem;
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
  }
`;
