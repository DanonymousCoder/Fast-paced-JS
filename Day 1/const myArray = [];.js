const myArray = [];
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}
console.log(myArray);

// For loop
// Setup
const myArray2 = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray2.push(i);
}
console.log(myArray2)

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i< arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(product*=arr[i][j])  
    }
  }

  // Only change code above this line
  return product;
}

console.log(multiplyAll([[1], [2], [3]]))


function multiply(arr, n) {
  let product = 1;
  for (let i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}
console.log(multiply([2,3,4], 3))


function sum(arr, n) {
  // Only change code below this line
  if (n == 0) {
    return 0;
  }
else {
  return sum(arr, n - 1) + arr[n-1];
}
  // Only change code above this line
}
console.log(sum([2,3,4], 1));
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
for (let i = 0; i < contacts.length; i++) {
  let contact = contacts[i];

  if (contact.firstName == name) {
    if (contact.hasOwnProperty(prop)) {
      return contact[prop];
    }
    else {
      return "No such property";
    }
  }
}
  return "No such contact"
}

console.log(lookUpProfile("Sherlock", "likes"));

function getRandomNumberRange(min, max) {
  return Math.floor(Math.random()*(max - min + 1)) + min;  
}
console.log(getRandomNumberRange(0, 100));

function checkSign(num) {
  return (num > 0) ? "positive"
  :(num < 0) ? "negative"
  : "zero";

}
console.log(checkSign(10));


// Only change code below this line
function countdown(n){
  if (n < 1) {
    return [];
  }
  else {
    const countArray = countdown( n - 1);
    countArray.unshift(n);
    return countArray;
  }
 
}
console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum ) {
    return []
  }
  else {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    return countArray;
  }
    
  };
  console.log(rangeOfNumbers(1, 5))

  function removeFirstTwo(list) {
    [a, b,...list] = list
    return list;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(removeFirstTwo(source))
  const sourceWithoutFirstTwo = removeFirstTwo(source);