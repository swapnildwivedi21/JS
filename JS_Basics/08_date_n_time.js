let myDate = new Date()
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())
console.log(typeof myDate) // Date is an object in JS

let myCreatedDate = new Date(2023,0,23)//months start from 0 in JS
let myCreatedDate2 = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("2023-01-12")
console.log(myCreatedDate3.toLocaleString())

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString())

//timestamp

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate4.getTime());
// console.log(Math.floor(Date.now()/1000))

let newDate  = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

//customizing the local string
newDate.toLocaleString('default',{
    weekday:"long",
    // timeZone:""
})
console.log("------------")
console.log(newDate)


