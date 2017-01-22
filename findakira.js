// Find Akira

var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line
	var profileFound = false;
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      profileFound = true;
      if (contacts[i].hasOwnProperty(prop)) {
       	console.log(contacts[i][prop]);
      } else {
        console.log("Error: The property", prop, "doesn't exist for", name, ".");
      }
    }
  }
  if (profileFound === false) {
  	console.log("Error: The name", name, "doesn't exist.");
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
