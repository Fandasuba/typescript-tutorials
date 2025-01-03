import { personDetails } from "../challenges/objects";

describe("Testing Explicit TypeSCript objects.", () => {
  test("testing that we can add a person correctly.", () => {
    const input = {
      name: "Craig",
      age: 29,
      hairColour: "brown",
      eyeColour: "Blue",
    };
    const result = personDetails(input);
    expect(result).toEqual({
      name: "Craig",
      age: 29,
      hairColour: "brown",
      eyeColour: "Blue",
    });
  });
  test("testing for non mutated return.", () => {
    const input = {
      name: "Craig",
      age: 29,
      hairColour: "brown",
      eyeColour: "Blue",
    };
    const copy = { ...input };
    personDetails(input);
    expect(input).toEqual(copy);
  });
  test("testing typeof object.", () => {
    const input = {
      name: "Craig",
      age: 29,
      hairColour: "brown",
      eyeColour: "Blue",
    };
    personDetails(input);
    expect(typeof input).toBe("object");
  });
  test("testing extra properties in object.", () => {
    const input = {
      name: "Craig",
      age: 29,
      hairColour: "brown",
      eyeColour: "Blue",
      occupation: "Developer", // Extra property
    };

    const result = personDetails(input);
    expect(result).toBe(false);
  });
});
