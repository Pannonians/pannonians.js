const { sabiranje, oduzimanje } = require("./matematika");

let qwe = 10;

console.log(sabiranje(10, qwe)); // 20
console.log(sabiranje(qwe, 25)); // 35

qwe = sabiranje(qwe, 12);

console.log(qwe); // 22

console.log(oduzimanje(100, qwe)); // 78
