import { theBoys } from "../challenges/arrays-tuples";
import { nameStats } from "../challenges/simple-types/string";
import { age } from "../challenges/simple-types/number";
import { studentStats } from "../challenges/simple-types/boolean";
import { tupleTests } from "../challenges/arrays-tuples";

describe("Testing Arrays", () => {
  test("Should return a copy of the original array.", () => {
    const input = ["Craig", "Jonny", "Tom"];
    const { newCopy } = theBoys(input);
    expect(newCopy).toEqual(input);
  });

  test("Should allow adding new names.", () => {
    const input = ["Craig", "Jonny", "Tom"];
    const boys = theBoys(input);
    boys.addingToTheBoys(["Damon", "Paris"]);
    expect(boys.newCopy).toEqual(["Craig", "Jonny", "Tom", "Damon", "Paris"]);
  });

  test("Should not mutate the original array.", () => {
    const input = ["Craig", "Jonny", "Tom"];
    const boys = theBoys(input);
    boys.addingToTheBoys(["Damon", "Paris"]);
    expect(input).toEqual(["Craig", "Jonny", "Tom"]);
  });

  test("Should return a new array instance.", () => {
    const input = ["Craig", "Jonny", "Tom"];
    const boys = theBoys(input);
    expect(boys.newCopy).not.toBe(input);
  });
});

describe("Testing out implementation of creating a new student", () => {
  test("testing a tuple returns with criteria of num, bool, and two strings", () => {
    const result = tupleTests([29, true, "Craig Robinson"]);
    expect(result).toEqual([
      `${age(29)}`,
      `${studentStats(true)}`,
      "Craig Robinson",
    ]);
  });

  test("should handle empty string names", () => {
    const result = tupleTests([29, true, " Robinson"]);
    expect(result).toEqual([
      `${age(29)}`,
      `${studentStats(true)}`,
      " Robinson",
    ]);
  });

  test("test if a user is created that isn't a student", () => {
    const result = tupleTests([29, false, "John Smith"]);
    expect(result).toEqual([
      `${age(29)}`,
      `${studentStats(false)}`,
      "John Smith",
    ]);
  });

  test("should not mutate the original tuple", () => {
    const input = [31, true, "Emma Brown"] as const;
    const original = [...input];
    const result = tupleTests(input);
    expect(input).toEqual(original);
  });

  test("should return an array", () => {
    const result = tupleTests([31, true, "Emma Brown"]);
    expect(Array.isArray(result)).toBe(true);
  });
});
