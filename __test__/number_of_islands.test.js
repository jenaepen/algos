const numIslands = require("../challenges/number_of_islands");

describe("numIslands test", () => {
  it(" numIslands([[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0], [0,0,0,0,0]] to equal 1", () => {
    expect(
      numIslands([
        [1, 1, 1, 1, 0],
        [1, 1, 0, 1, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ])
    ).toBe(1);
  });

  it(" numIslands([[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]] to equal 3", () => {
    expect(
      numIslands([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 0, 1, 1]
      ])
    ).toBe(3);
  });

  it(" numIslands([] to equal 0", () => {
    expect(numIslands([])).toBe(0);
  });

  it(" numIslands(null to equal 0", () => {
    expect(numIslands(null)).toBe(0);
  });
});
