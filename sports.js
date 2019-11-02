var sportsOne = ["Golf", "Cricket", "Fencing", "Tennis", "Swiming"];
console.log("Classic for loop");
for (var index = 0; index < sportsOne.length; index++) {
    console.log(sportsOne[index]);
}
// simplified for loop
console.log("Simplified for loop");
console.log("******************");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var iterator = sportsOne_1[_i];
    if (iterator == "Cricket") {
        console.log(iterator + " << My favorite!");
    }
    else {
        console.log(iterator);
    }
}
