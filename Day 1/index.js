// Record Collection


const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if (value.length ==  0) {
      delete records[id][prop];
    }
    else if (prop != "track") {
      records[id][prop] = value ;
    }
    else if (prop == "track" && records.hasOwnProperty["tracks"]){
      records[id][prop].push(value);
    }
    else {
      record[id][tracks]= []
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');



  a
// 
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
console.log(myArray2);


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
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

/* 
function multiply(arr, n) {
    let product = 1;
    for (let i = 0; i < n; i++) {
      product *= arr[i];
    }
    return product;
  }
*/
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


// Setup
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


  // Only change code above this line
}

console.log(lookUpProfile("Sherlock", "likes"));