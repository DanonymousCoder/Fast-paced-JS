// Setup
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

// While loop
  const myArray = [];
let i = 5;
while (i > -1) {
  myArray.push(i);
  i--;
}
console.log(myArray);