import { nameStats } from "./simple-types/string";
import { age } from "./simple-types/number";
import { studentStats } from "./simple-types/boolean";

// Simple adding names to an array with scoping.

function theBoys(names: string[]) {
  const newCopy = [...names];

  function addingToTheBoys(newNames: string[]) {
    //console.log(newNames);
    newCopy.push(...newNames);
    // console.log(newCopy, "inside the adding names function");
  }

  //console.log(newCopy);
  return { newCopy, addingToTheBoys };
}

/// New function for read only array understanding.

function readOnlyArray(names: readonly string[]) {
  const newCopy = [...names];
  newCopy.push("Ashley"); // Can push to the new cloned array variable, but pushing to the argument doesn't work due to TypeScript prevention.
}

/// New function for dealing with Tuple form - take the stuff from simple to populate it to emulate server data.

function tupleTests(tuple: readonly [number, boolean, string]) {
  const [newAge, validStudent, fullName] = tuple; // fullName is passed directly
  const newStudent = [
    `${age(newAge)}`,
    `${studentStats(validStudent)}`,
    fullName, // Directly use fullName from the tuple
  ];
  return newStudent;
}
export { theBoys, readOnlyArray, tupleTests };
