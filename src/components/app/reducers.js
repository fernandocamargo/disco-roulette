import update from 'immutability-helper';

export const getInitialState = () => ({
  history: [],
  release: {},
  releases: [],
});

export const merge = ({ release, releases }) => state =>
  update(state, {
    ...(!!release && {
      history: { $push: [release.id] },
      release: { [release.id]: { $set: release } },
    }),
    ...(!!releases && { releases: { $set: releases } }),
  });
