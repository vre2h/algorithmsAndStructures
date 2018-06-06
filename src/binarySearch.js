const binarySearch = (arr, value) => {
  let begin = 0;
  let end = arr.length - 1;

  while (begin <= end) {
    const middle = (begin + end) / 2;

    if (arr[middle] === value) {
      return middle;
    } else if (arr[middle] > value) {
      end = middle - 1;
    } else if (arr[middle] < value) {
      begin = middle + 1;
    }
  }

  return null;
};

export default binarySearch;
