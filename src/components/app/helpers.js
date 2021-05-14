export const flatten = (current, next) => current.concat(next);

export const random = until => Math.floor(Math.random() * until) + 1 - 1;
