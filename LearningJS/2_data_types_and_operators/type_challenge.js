console.log("1: " +  typeof true); // boolean
console.log("2: " +  typeof Boolean(true)); // boolean
console.log("3: " +  typeof new Boolean(true)); // object
console.log("4: " +  typeof new Boolean(true).valueOf()); // boolean
console.log("5: " + typeof "abc"); // string
console.log("6: " + typeof String("abc")); // string
console.log("7: " + typeof new String("abc")); // objekat
console.log("8: " + typeof new String("abc").valueOf()); // string
console.log("9: " +  typeof 123); // number
console.log("10: " + typeof Number(123)); // number
console.log("11: " + typeof new Number(123)); // object
console.log("11: " + typeof new Number(123).valueOf()); // number