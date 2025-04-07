// let dumm = {
//     fname : "azhar",
//     age: 23
// }
// console.log(dumm,typeof dumm)

// let objecttostring = JSON.stringify(dumm)
// console.log(objecttostring, typeof objecttostring);

let obj = `{
"fname" : "azhar",
"age" : 20
}`
console.log(obj,typeof obj);

let stringToObj = JSON.parse(obj)
console.log(stringToObj, typeof stringToObj);
console.log(stringToObj.age), typeof stringToObj;