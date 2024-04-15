// Core Types - Objects | Arrays | Tuple | Enum | Any
//npx tsc app.ts

// ===== == Objects == ===== \\
/*
const person = {
  name: "Aaqib",
  age: 5000
};

console.log(person.name);
*/
/*
// Custom definition on an object
const person: {
  name: string;
  age: number;
} = {
  name: "Aaqib",
  age: 5000
};
console.log(person.name)
*/


// ===== == Arrays == ===== \\
/*
const person = {
  name: 'Aaqib',
  age: 89,
  hobbies: ['Manga', 'Video Games', 'Sand Castles']
}

console.log(person.name)
person.role.push('admin');
person.role[1]=10;
console.log(person)

let favouriteActivity: string[]; 
favouriteActivity = ["Manga"];

let favouriteActivityAny: any[]; 
favouriteActivityAny = ["Manga", 1, true];

for (const hobby of person.hobbies){
  console.log(hobby);
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); // Error
}
*/

// ===== == Tuple == ===== \\
/*
// Explicite definition of tuple Without the below statement it will be an array of multiple types
const person: {   
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]

} = {
  name: 'Aaqib',
  age: 89,
  hobbies: ['Manga', 'Video games'],
  role: [1,'Developer']
}

person.role.push('admin'); // Allowed in Tuples [unfortunately]
//person.role[1]=10; // Error in tuple , Allowed in Array

//person.role  = []; // Error
//person.role =  [10, 'Admin']; // Allowed
//person.role = [10, 'Admin', 'Admin']; // Error

console.log(person.role);

for (const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}

*/

// ===== == Enum == ===== \\
/*
//enum Role {ADMIN, READ_ONLY, AUTHOR}; //by-default ADMIN=0, READ_ONLE=1 and AUTHOR=2
//enum Role {ADMIN=5, READ_ONLY, AUTHOR}; //If we want to start with any other number
enum Role {ADMIN='Admin', READ_ONLY=5, AUTHOR}; //Also go with texts

const person = {
  name: 'Aaqib',
  age: 89,
  hobbies: ['Manga', 'Video games'],
  role: Role.ADMIN
}
*/
// ===== == Any == ===== \\
/*
//let favouriteActivityAny: any[]; 
//favouriteActivityAny = ["Manga", 1, true];
let favouriteActivityAny: any; 
favouriteActivityAny = ["Manga", 1, true];
*/