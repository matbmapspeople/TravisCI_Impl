const mathOperations = require("./calculator");

function filterByTerm(inputArr, searchTerm) {
    return inputArr.filter(function(arrayElement) {
      return arrayElement.url.match(searchTerm);
    });
  }

describe("Filter specific name", () => {
    test("It should successfuly filter link word: link", () => {
      const input = [
        { id: 1, url: "https://www.url1.dev" },
        { id: 2, url: "https://www.url2.dev" },
        { id: 3, url: "https://www.link3.dev" }
      ];
  
      const output = [{ id: 3, url: "https://www.link3.dev" }];
  
      expect(filterByTerm(input, "link")).toEqual(output);
  
    });
  });

  describe("Calculator test", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
   })