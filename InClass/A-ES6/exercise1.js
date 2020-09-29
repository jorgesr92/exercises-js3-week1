// Turn this function into an arrow function
 const arrow = () => "es6 is awesome!";
 console.log(arrow());

//Use the es6 syntax for default parameter
const defaultParameter = (name = "sam") => name;
console.log(defaultParameter("jorge"));
console.log(defaultParameter());

// Use the spread operator to combine arr1 and arr2


const combineArrays = (arr1, arr2) => [...arr1, arr2];

console.log(combineArrays([1,2,3], [4]));

//use destructuring to return the object's cyf property
const destructuring = (obj) =>{ 
  const { cyf } = obj;
  return cyf;
};


// use template literal to return a string with the sum of a and b
const templateString = (a, b) => `The sum is equal to ${(a + b).toString()}`;

console.log(templateString(5,9));