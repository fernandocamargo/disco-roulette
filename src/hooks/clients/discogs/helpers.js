export const identify = () =>
  window.location.pathname
    .trim()
    .toLowerCase()
    .substr(1) || 'pr0n';
