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

describe("Multiplication test" , () => {
  test('By multypling 5,154 and 678,1223 we should get 3.495,0423342'), ()=> {
  expect(mathOperations.mult(5,154, 678,1223)).toBe(3495.0423342)
}});
