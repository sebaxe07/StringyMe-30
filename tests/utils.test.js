// tests/utils.test.js

const { reverseString, capitalizeFirstLetter } = require("../src/Utils.js");

// Test reverseString function
test("reverseString reverses a string", () => {
  expect(reverseString("hello")).toBe("olleh");
  expect(reverseString("world")).toBe("dlrow");
});

// Test capitalizeFirstLetter function
test("capitalizeFirstLetter capitalizes the first letter of a string", () => {
  expect(capitalizeFirstLetter("hello")).toBe("Hello");
  expect(capitalizeFirstLetter("world")).toBe("World");
});
