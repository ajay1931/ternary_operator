var unit = 50
var charge = unit <= 50 ? unit * 0.50 : unit <= 150 ? 25 + ((unit - 50) * 0.75) : unit <= 250 ? 100 + ((unit - 150) * 1.20) : 220 + ((unit - 250) * 1.50)
var surcharge = charge * 20 / 100
var bill = charge + surcharge
console.log(bill)