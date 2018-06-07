const quickSort = (arr) => {
  const clone = [...arr];

  if (clone.length < 2) {
    return clone;
  }

  const pivot = clone[0];
  const less = clone.slice(1).filter(elem => elem <= pivot);
  const greater = clone.slice(1).filter(elem => elem > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

export default quickSort;
