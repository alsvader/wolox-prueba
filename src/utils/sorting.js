const sortByNameAsc = (a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();

  if (x < y) return -1;

  if (x > y) return 1;

  return 0;
}

const sortByNameDesc = (a, b) => {
  const x = a.name.toLowerCase();
  const y = b.name.toLowerCase();

  if (x < y) return 1;

  if (x > y) return -1;

  return 0;
}

export { sortByNameAsc, sortByNameDesc }
