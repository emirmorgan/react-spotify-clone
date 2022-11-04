export const convertSeconds = (seconds) => {
  const time = new Date(1000 * seconds).toISOString().substring(19, 14);

  return time;
};
