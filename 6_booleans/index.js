// //Boolean. Booleans may only be one of two values: true or false.
// //They are basically little on-off switches, where true is on and false is off.
// //These two states are mutually exclusive.
// //Boolean conditions True and False are conditions under which JavaScript will execute some code.

// function trueOrFalse(wasThatTrue) {
//   if (wasThatTrue) {
//     return "Yes, that was true";
//   }
//   return "No, that was false";
// }
// console.log(trueOrFalse(true));
// console.log(trueOrFalse(false));

// function testSize(num) {
//   if (num < 5) {
//     return "Tiny";
//   } else if (num < 10) {
//     return "Small";
//   } else if (num < 15) {
//     return "Medium";
//   } else if (num < 20) {
//     return "Large";
//   } else if (num >= 20) {
//     return "Huge";
//   }
// }

// console.log(testSize(50));

// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return "Hole-in-one!";
//   } else if (strokes <= par - 2) {
//     return "Eagle";
//   } else if (strokes == par - 1) {
//     return "Birdie";
//   } else if (strokes == par) {
//     return "Par";
//   } else if (strokes == par + 1) {
//     return "Bogey";
//   } else if (strokes == par + 2) {
//     return "Double Bogey";
//   } else if (strokes >= par + 3) {
//     return "Go Home";
//   }
// }

// console.log(golfScore(4, 7));

// if (true) {
//   //uvek će se izvršiti
// }
// if (false) {
//   //nikada se neće izvršiti kod unutar vitičastih zagrada
// }

// if ("true") {
//   console.log("izvršeno");
// } //postojanje vrednosti

// if (1) {
//   console.log("izvršeno2");
// }

// if (0) {
//   console.log("izvršeno3");
// }

// console.log(typeof 0); // 1(broj) je True a 0(broj) je False unutar IF statement-a

// shorthand method for writing IF statement
// typeof 1 === "number"
//   ? console.log("broj")
//   : typeof 1 === "string"
//   ? console.log("string")
//   : console.log("nije broj");

// Another example of shorthand using logical AND operator
// typeof 1 === "number" && console.log("i ovo je broj");
// typeof 1 === "string" && console.log("nije broj");

// // full IF statement
// if (typeof 1 === 'number') {
//   console.log('numbeerrrrrrrr');
// } else {
//   console.log('naaahhh')
// }

// var testUzorak1 = 5
// var testUzorak2 = null
// var testUzorak3 = 'string'

// var testCase = (datiTestUzorak) => {
//   switch (typeof datiTestUzorak) {
//     case 'number':
//       return 'ne znam ti ja sa brojevima, ovo je broj'
//     case 'string':
//       return 'string more'
//     case 'boolean':
//       return 'ovo je boolean'
//     default:
//       return 'sta god da je'
//   }
// }

// console.log(testCase(testUzorak1))
// console.log(testCase(testUzorak2))
// console.log(testCase(testUzorak3))
