import selectionSort from '../src/algorithms/selectionSort';

test('must be [1, 2, 3]', () => {
  expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test('must be [0, 1, 2, 3, 4]', () => {
  expect(selectionSort([0, 3, 2, 4, 1])).toEqual([0, 1, 2, 3, 4]);
});
