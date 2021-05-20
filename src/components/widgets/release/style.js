import times from 'lodash/times';
import styled from 'styled-components';

export const draw = unit => `${unit}px ${unit}px 0 0 #ccc`;

export default component => styled(component)`
  font-family: 'PT Mono', monospace;
  font-size: 1.25rem;
  bottom: 1.5rem;
  margin: 0 0 0 1rem;
  position: absolute;
  right: 1.5rem;

  &:before {
    background: url(${({ images: [{ uri }] }) => CSS.escape(uri)}) center
      no-repeat;
    background-size: cover;
    content: '';
    display: block;
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
  }

  dl {
    display: block;

    &[aria-roledescription='title'] {
      a {
        background-color: #fff;
        color: #000;
      }
    }
  }

  dt {
    display: none;
  }

  dd {
    text-align: right;
  }

  a {
    background-color: #000;
    box-shadow: inset 0 -4px 0 0 rgba(0, 0, 0, 0.2),
      ${times(24, draw).join(', ')};
    color: #fff;
    display: inline-block;
    padding: 0.5rem 1rem;
    position: relative;
    text-decoration: none;
  }
`;
