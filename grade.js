var physics = 50
var chemistry = 50
var biology = 50
var mathematics = 50
var computer = 35
var percentage = (physics + chemistry + biology + mathematics + computer) / 500 * 100
var grade = percentage >= 90 ? "Grade A" : percentage >= 80 ? "Grade B" : percentage >= 70 ? "Grade C" : percentage >= 50 ? "Grade D" : "grade E";
console.log(percentage)
console.log(grade)