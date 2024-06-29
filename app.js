// import /*syhello*/ nasr, {myNumber, arr, saysomthing} from "./main.js"
// console.log(myNumber)
// console.log(arr)
// console.log(saysomthing())
// console.log(/*syhello*/nasr())

import * as all from "./main.js"

console.log(all)
console.log(all.arr)
console.log(all.myNumber)

export function myFunction() {
    console.log("Hello from myModule!");
  }