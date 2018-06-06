import binarySearch from '../src/algorithms/binarySearch';

test('index of 1 must be 0', () => {
  expect(binarySearch([1, 2, 3], 1)).toBe(0);
});

test('index of 4 must be null', () => {
  expect(binarySearch([1, 2, 3], 4)).toBe(null);
});

test('index of 3 must be 2', () => {
  expect(binarySearch([1, 2, 3], 3)).toBe(2);
});
