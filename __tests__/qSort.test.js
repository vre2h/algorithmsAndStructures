import quickSort from '../src/algorithms/qSort';

test('must be [1, 2, 3]', () => {
  expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test('must be [0, 1, 2, 3, 4]', () => {
  expect(quickSort([0, 3, 2, 4, 1])).toEqual([0, 1, 2, 3, 4]);
});
