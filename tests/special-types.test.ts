import { returnAny } from "../challenges/special-types/any.ts";
import { throwError } from "../challenges/special-types/never.ts";
import { checkUndefined } from "../challenges/special-types/undefined.ts";
import { returnNull } from "../challenges/special-types/null.ts";

describe("Any Type Challenges", () => {
  test("should return any value passed to it", () => {
    const numResult = returnAny(5);
    const strResult = returnAny("hello");
    const objResult = returnAny({ name: "Craig" });
    const boolResult = returnAny(true);
    const undefinedResult = returnAny(undefined);
    const nullResult = returnAny(null);

    expect(numResult).toBe(5);
    expect(strResult).toBe("hello");
    expect(objResult).toEqual({ name: "Craig" });
    expect(boolResult).toBe(true);
    expect(undefinedResult).toBe(undefined);
    expect(nullResult).toBe(null);
  });
});

describe("Never Type Challenges", () => {
  test("should throw an error with a specific message", () => {
    expect(() => throwError("Something went wrong")).toThrow(
      "Something went wrong"
    );
  });
});

describe("Undefined Type Challenges", () => {
  test("should return undefined when passed undefined", () => {
    const result = checkUndefined(undefined);
    expect(result).toBeUndefined();
  });
  test("should return a string when undefined criteria isn't met.", () => {
    const result = checkUndefined("Hello");
    expect(result).toBe("Hello");
  });
});

describe("Null Type Challenges", () => {
  test("should return null if  non umber primitive is the argument", () => {
    const stringReturn = returnNull("Hi");
    const boolReturn = returnNull(true);
    const nullReturn = returnNull(null);
    const undefinedReturn = returnNull(undefined);
    expect(stringReturn).toBeNull();
    expect(boolReturn).toBeNull();
    expect(nullReturn).toBe(null);
    expect(undefinedReturn).toBeNull();
  });

  test("should return the provided numeric value", () => {
    const result = returnNull(42);
    expect(result).toBe(42);
  });
});
