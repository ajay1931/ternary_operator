var bill = 1000
var discount= bill <= 1000 ? 10 : bill <= 2000 ? 20 : bill <= 3000 ? 30 : 50
var discountPrice = bill * discount / 100
var discountBill = bill - discountPrice
console.log(discountBill)
