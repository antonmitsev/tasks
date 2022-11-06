const sequences = require("../task-001.js").sequences;

describe("sequences", () => {
  it("sequences should return for empty array", () => {
    expect(sequences([])).toEqual({
      element: null,
      number: 0,
      startIndex: null,
    });
  });

  it("sequences should return for undefined/null input", () => {
    expect(sequences()).toEqual({
      element: null,
      number: 0,
      startIndex: null,
    });
  });

  it("sequences should return for an array input", () => {
    expect(sequences([6, 6, 6, 4, 6, 6, 6, 6])).toEqual({
      element: 6,
      number: 4,
      startIndex: 4,
    });
  });
});
