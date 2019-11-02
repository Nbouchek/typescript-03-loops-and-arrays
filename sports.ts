let sportsOne: string[] = ["Golf", "Cricket", "Fencing", "Tennis", "Swiming"];

console.log("Classic for loop");
for (let index = 0; index < sportsOne.length; index++) {
  console.log(sportsOne[index]);
}

// simplified for loop
console.log("Simplified for loop");
console.log("******************");
for (const iterator of sportsOne) {
  console.log(iterator);
}
