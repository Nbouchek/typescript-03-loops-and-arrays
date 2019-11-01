let reviews: number[] = [5, 5, 4.5, 1, 3];

let total: number = 0;

for (let index = 0; index < reviews.length; index++) {
  console.log(reviews[index]);
  total = total + reviews[index];
}

let average: number = total / reviews.length;
console.log("Average = " + average);
