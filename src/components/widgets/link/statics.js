import { node, string } from 'prop-types';

export const displayName = 'Link';

export const defaultProps = {
  target: '_blank',
  rel: 'noreferrer',
};

export const propTypes = {
  children: node.isRequired,
  href: string.isRequired,
};
