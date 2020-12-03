import { TYPES_SORT } from '../config/constants';

const sortByNameAsc = (a, b) => {
  const x = a.tech.toLowerCase();
  const y = b.tech.toLowerCase();

  if (x < y) return -1;

  if (x > y) return 1;

  return 0;
};

const sortByNameDesc = (a, b) => {
  const x = a.tech.toLowerCase();
  const y = b.tech.toLowerCase();

  if (x < y) return 1;

  if (x > y) return -1;

  return 0;
};

const getSortFunc = (type) => {
  switch (type) {
    case TYPES_SORT.SORT_ASC:
      return sortByNameAsc;
    case TYPES_SORT.SORT_DESC:
      return sortByNameDesc;
    default:
      return undefined;
  }
};

const filterByName = (list, payload) => list.filter(
  x => x.tech.toLowerCase()
    .includes(payload.toLowerCase()),
);

const filterByType = (list, types) => {
  if (types.length === 0) {
    return list;
  }

  let finalList = [];

  types.forEach(item => {
    const items = list.filter(x => x.type.toLowerCase() === item.type);
    finalList = [...finalList, ...items];
  });

  return finalList;
};

const filterSearch = (listTech, filtersData) => {
  const listToFilter = [...listTech];

  const { term, orderBy } = filtersData;
  let { types } = filtersData;
  types = types.filter(x => x.value);

  let finalList = [];

  // apply type filter
  finalList = filterByType(listToFilter, types);

  // apply term search filter
  finalList = filterByName(finalList, term);

  // apply sorting
  const sortFunc = getSortFunc(orderBy);
  finalList.sort(sortFunc);

  return finalList;
};

export default filterSearch;
