console.log("2">1);
console.log("02">1);

console.log(null>0);
console.log(null==0);
console.log(null!=0);
console.log(null>=0);
console.log(undefined==0);

//////
// PRIMITIVE
// 7 types: String, number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log( id === anotherId)

const bigNumber = 3465343234234234232342n //bigInt number

// Reference(Non Primitive)

// memory mein reference alocate kar sakte hain
// Arrays, Objects , Functions

const heroes = ['Shaktiman','Naagraj','Doga']

//Object
let myobj = {
    name:"swapnil",
    age: 22,
}

//functions

const myFunction  =function(){
    console.log("Hello World");
}

console.log(typeof bigNumber)
console.log(outsideTemp)
console.log(typeof heroes)
console.log(typeof myobj)
console.log(typeof myFunction)

// Return types
// Primitive Datatype
// String --> String
//Integer/float(Number) -->Number
//Boolean --> Boolean
//null -->Object
//undefined -->Undefined
//Biginteger -->Bigint
//Symbol --->Symbol

//Reference (non primitive) data type
//Arrays-->Object
//Objects-->object
//Function ---> Function

//JS is dynamically  typed language

//////////

// Stack(Primitive) --> we get a copy in stack

// Heap(Non-Primitive)---> we get a reference here 

let myYoutubename = "swapnildwivedi"
let anothername = myYoutubename

console.log(anothername)

console.log(myYoutubename)
anothername = "pikapika"
console.log(anothername)

let user1 = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user1 // here reference is given 

user2.email = "aws@gmail.com" // now value will be changed
console.log(user1.email)
console.log(user2.email)

