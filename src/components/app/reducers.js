import update from 'immutability-helper';

export const getInitialState = () => ({
  error: null,
  index: null,
  loading: true,
  releases: [],
});

export const merge = next => current =>
  update(current, { loading: { $set: false }, $merge: next });
