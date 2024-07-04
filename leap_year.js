function isLeapYear(year) {
    return (year % 4 === 0 ? year % 100 !== 0 ? true : (year % 400 === 0 ? true  : false) : false)
}
let year = 2000
let result = isLeapYear(year);
console.log(`${year} is ${result ? "a leap year": "not a leap year"}`);
