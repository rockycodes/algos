const expect = require('chai').expect;
const threeNumSum = require('../algos/threeNumSum');

describe('threeNumSum', function () {
  it('returns the triplets that add to the target sum if the array is sorted', function () {
    expect(threeNumSum([1, 2, 3], 6)).to.eql([[1, 2, 3]]);
  });
  it('returns an empty array if no triplets are found', function () {
    expect(threeNumSum([1, 2, 3], 7)).to.eql([]);
  });
  it('returns the triplets that add to the target sum if the array is unsorted', function () {
    expect(threeNumSum([1, -2, 10, 5, -3], 12)).to.eql([[-3, 5, 10]]);
  });
  it('returns the triplets in numerical order', function () {
    expect(threeNumSum([1, 2, 3, 4, 5, 6, 7], 10)).to.eql([[1, 2, 7], [1, 3, 6], [1, 4, 5], [2, 3, 5]]);
  });
});
