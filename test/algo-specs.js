const expect = require('chai').expect;
const kAway = require('../algos/kAway');

describe('kAway', function () {
  it('returns a sorted array', function(){
    expect(kAway([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 2)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('can handle an array with numbers that are not consecutive ', function(){
    expect(kAway([1, 7, 12, 4, 20, 8, 13], 4)).to.eql([1, 4, 7, 8, 12, 13, 20]);
  });
  it('can handle an empty array', function(){
    expect(kAway([], 2)).to.eql([]);
  });
  it('can handle k > array.length', function(){
    expect(kAway([1, 4, 5, 2, 3, 7, 8, 6, 10, 9], 11)).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
