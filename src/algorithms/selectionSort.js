const getSmallest = arr =>
  arr.reduce((acc, elem) => (acc < elem ? acc : elem), arr[0]);

const selectionSort = (arr) => {
  let clone = [...arr];
  const result = [];

  while (clone.length !== 0) {
    clone = clone.reduce((acc, elem) => {
      const highest = getSmallest(acc);
      if (elem === highest) {
        result.push(elem);
        return acc.filter(iElem => iElem !== elem);
      }
      return acc;
    }, clone);
  }

  return result;
};

export default selectionSort;
