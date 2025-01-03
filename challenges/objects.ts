// learning explicit object types then adding in index signature to advance it.

function personDetails(personObject: {
  name: string;
  age: number;
  hairColour: string;
  eyeColour: string;
}) {
  // Function to validate the person object using index signature
  function validatePerson(person: { [key: string]: string | number }): boolean {
    const requiredKeys: (keyof typeof person)[] = [
      //making sure it becomes explicit here.
      "name",
      "age",
      "hairColour",
      "eyeColour",
    ];

    // Validate that all required keys are present and of correct type
    for (let key of requiredKeys) {
      if (!(key in person)) {
        console.error(`Missing required key: ${key}`);
        return false;
      }
      if (typeof person[key] !== "string" && typeof person[key] !== "number") {
        console.error(`Invalid type for ${key}. Expected a string or number.`);
        return false;
      }
    }

    // Check for extra properties
    const allowedKeys = ["name", "age", "hairColour", "eyeColour"];
    const extraKeys = Object.keys(person).filter(
      (key) => !allowedKeys.includes(key)
    );

    if (extraKeys.length > 0) {
      console.error(`Extra properties detected: ${extraKeys.join(", ")}`);
      return false;
    }

    return true;
  }

  // Validate the person object before returning it
  if (!validatePerson(personObject)) {
    return false; // Or handle invalid object in another way
  }

  // Return the person object if validation passes
  return { ...personObject };
}

export { personDetails };
