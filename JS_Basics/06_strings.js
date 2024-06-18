const name  = "hitesh"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`);

//another way 
const gameName = new String('hiteshhhc')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)// to see the object
console.log(gameName.length)
console.log(gameName.toLowerCase())
console.log(gameName.toUpperCase())
console.log(gameName)//original value is not changed
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)//last 4th character won't be included
console.log(newString)//no effect of negative values

const anotherString  = gameName.slice(0,4)
console.log(anotherString);

const anotherString1  = gameName.slice(-8,4)
console.log(anotherString1)

console.log(anotherString.includes('sundar'))
console.log(anotherString1.split('-'))

