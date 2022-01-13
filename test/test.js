const { expect } = require("chai");
const { birthdayCakeCandles } = require("../dist/birthdayCakeCandles");
describe("birthdayCakeCandles", function () {
  it("Should print the mount of tallest candles of a birthday cake", function () {
    expect(birthdayCakeCandles(1, 2, 3, 3)).to.be.equal(2);
  });
});
