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