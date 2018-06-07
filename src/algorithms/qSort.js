const quickSort = (arr) => {
  const clone = [...arr];

  if (clone.length < 2) {
    return clone;
  }

  const randIndex = Math.floor(Math.random() * (arr.length - 1));
  const pivot = clone[randIndex];
  const less = clone.slice(1).filter(elem => elem <= pivot);
  const greater = clone.slice(1).filter(elem => elem > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
};

export default quickSort;
