const expect = require('chai').expect;
const strShift = require('../algos/strShift');

describe('strShift', function () {
  it('returns the same string if shifted 0 spaces', function () {
    expect(strShift('ref', 0)).to.eql('ref');
  });
  it('returns the correct string if shifted some number of spaces', function () {
    expect(strShift('abc', 5)).to.eql('fgh');
  });
  it('cycles back to the beginning of the alphabet if shifted past z', function () {
    expect(strShift('xyz', 5)).to.eql('cde');
  });
  it('returns the correct string if the number of shift spaces > 26', function () {
    expect(strShift('xyz', 52)).to.eql('xyz');
  });
});
