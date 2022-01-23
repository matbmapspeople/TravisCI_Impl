const mathOperations = require("./somemath");

function filterByTerm(inputArr, searchTerm) {
  return inputArr.filter(function (arrayElement) {
    return arrayElement.url.match(searchTerm);
  });
}

describe("Filter word function", () => {
  test("It should filter word 'link'", () => {
    const input = [
      { id: 1, url: "https://www.url1.dev" },
      { id: 2, url: "https://www.url2.dev" },
      { id: 3, url: "https://www.link3.dev" }
    ];

    const output = [{ id: 3, url: "https://www.link3.dev" }];

    expect(filterByTerm(input, "link")).toEqual(output);

  });
});

describe("Sum test", () => {
  test('By adding 1 and 2 we shoould get 3', () => {
    expect(mathOperations.sum(1, 2)).toBe(3);
  });
})

describe("Multiplication test", () => {
  test('By multypling 5 and 678 we should get 3390', () => {
    expect(mathOperations.mult(5, 678)).toBe(3390)
  })
});

describe("Multiplication test 1", () => {
  test('By multypling 3 and 3 we should get 9', () => {
    expect(mathOperations.mult(3, 3)).toBe(9)
  })
});

describe("Multiplication test 2", () => {
  test('By multypling 4 and 4 we should get 16', () => {
    expect(mathOperations.mult(4, 4)).toBe(16)
  })
});
