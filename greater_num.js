// var num1=1
// var num2=2
// var greater=num1>num2 ? "greater number"+num1 : "greater number is "+num2
// console.log(greater)

var num1 = 3
var num2 = 1
var num3 = 6
var greater = num1 > num2 ? num1 : num2;
var max = greater > num3 ? greater : num3;
// if (num1 === num2 && num2 === num3) {
//     console.log("All numbers are equal")
// }
// else {
//     console.log("greater number is " + max)
// }
var final = num1 === num2 && num2 === num3 ? "All numbers are equal" : "greater number is " + max
console.log(final)