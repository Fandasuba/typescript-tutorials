import { age } from "../challenges/simple-types/number.ts";
import { studentStats } from "../challenges/simple-types/boolean.ts";
import { nameStats } from "../challenges/simple-types/string.ts";

describe("Number Type Challenges", () => {
  test("should return numbers and not string of the numbers.", () => {
    const actual = age(12);
    expect(typeof actual).toBe("number");
  });
  test("should return the correct string with age and favourite number", () => {
    const result = age(25);
    expect(result).toBe(25);
  });

  test("should work with different values", () => {
    const result = age(30);
    expect(result).toBe(30);
  });
});

describe("String Type Challenges", () => {
  test("firstName should be a string", () => {
    const actual = nameStats("Craig", "Robinson");
    expect(typeof actual).toBe("string");
  });

  test("Name should be Craig Robinson", () => {
    const firstName = "Craig";
    const lastName = "Robinson";
    const actual = nameStats(firstName, lastName);
    expect(actual).toBe("The person's name is Craig Robinson.");
  });
});

describe("Boolean Type Challenges", () => {
  test("isStudent should be a boolean", () => {
    const actual = studentStats(true);
    expect(typeof actual).toBe("boolean");
  });
  test("Should return true", () => {
    const actual = studentStats(true);
    expect(actual).toBe(true);
  });
  test("Should return false", () => {
    const actual = studentStats(false);
    expect(actual).toBe(false);
  });
});
