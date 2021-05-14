import styled from 'styled-components';

export default component => styled(component)`
  bottom: 1rem;
  font-family: 'PT Mono', monospace;
  font-size: 3rem;
  margin: 0 0 0 1rem;
  position: absolute;
  right: 1rem;

  dl {
    display: block;
  }

  dt {
    display: none;
  }

  dd {
    text-align: right;
  }

  a {
    background-color: #000;
    color: #fff;
    display: inline-block;
    padding: 0 1rem;
    text-decoration: none;
  }

  &:before {
    background-image: ${({ images: [{ uri }] }) => `url("${uri}")`};
    background-position: center;
    background-size: cover;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: -1;
  }
`;
