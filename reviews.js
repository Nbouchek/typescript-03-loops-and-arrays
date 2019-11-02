var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
for (var index = 0; index < reviews.length; index++) {
    console.log(reviews[index]);
    total = total + reviews[index];
}
var average = total / reviews.length;
console.log("Average = " + average);
