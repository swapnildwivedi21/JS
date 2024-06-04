let score = "33"

let valueInNumber = Number(score)
console.log(typeof(score))
console.log(typeof(valueInNumber))
console.log(typeof String(valueInNumber))

let score1  = "33abc"
console.log(typeof(score1))
// if there is a number combined with the string , the printing post conversion will give "Nan"
console.log(Number(score1))

let score2 = null
console.log(score2)

let score3 =""
let score3boolean = Boolean(score3)
console.log(score3boolean)

