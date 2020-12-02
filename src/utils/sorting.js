import { TYPES_SORT } from '../config/constants';

const sortByNameAsc = (a, b) => {
  const x = a.tech.toLowerCase();
  const y = b.tech.toLowerCase();

  if (x < y) return -1;

  if (x > y) return 1;

  return 0;
}

const sortByNameDesc = (a, b) => {
  const x = a.tech.toLowerCase();
  const y = b.tech.toLowerCase();

  if (x < y) return 1;

  if (x > y) return -1;

  return 0;
}

const getSortFunc = (type) => {
  switch (type) {
    case TYPES_SORT.SORT_ASC:
      return sortByNameAsc;
    case TYPES_SORT.SORT_DESC:
      return sortByNameDesc;
    default:
      break;
  }
}

const filterByName = (list, payload) => {
  return list.filter(
    x => x.tech.
      toLowerCase()
      .includes(payload.toLowerCase())
  );
}

export {
  sortByNameAsc,
  sortByNameDesc,
  getSortFunc,
  filterByName,
}
