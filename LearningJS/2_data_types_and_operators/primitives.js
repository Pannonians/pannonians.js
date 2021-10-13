String.prototype.vratiSamogSebe = function () {
  return this;
};

var a = "qwe";
var b = a.vratiSamogSebe();

console.log(a); // qwe
console.log(typeof a); // string
console.log(b); // [String: 'qwe']
console.log(b == 'qwe'); // true
console.log(b === 'qwe'); // false
console.log(typeof b); // object
