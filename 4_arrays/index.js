const qwe = [40, 2, 3, 4, 5];

console.log(qwe.push(10));
console.log(qwe);

console.log(qwe.pop());
console.log(qwe);

console.log(qwe.shift());
console.log(qwe);

console.log(qwe.unshift("qwe", "asd", "zxc"));
console.log(qwe);

console.log(qwe.push({ ucimo_javascript: "ovde sada ovde" }));
console.log(qwe);

let index = 0;
for (index; index < qwe.length; index++) {
  if (typeof qwe[index] === "number") {
    qwe[index] *= 2;
  }
}

console.log(qwe);

/**
 * Ovo je za domaci
 * Ove cetr' funkcije moraju da se znaju
 * u svako doba dana i noci!!!
 * 
 * (obojeno u crveno)
 */
// qwe.find();
// qwe.filter();
// qwe.map();
// qwe.reduce();
/// !!!!!

// vrti sve u nizu i vraca taj jedan
// za koji je uslov true
const zxc = qwe.reverse().find(function (jedan_u_nizu) {
  return typeof jedan_u_nizu === "number";
});
qwe.reverse();

console.log("poslednji u nizu:", zxc);
console.log(qwe);

console.log(
  qwe.filter((jedan_u_nizu_za_filter) => {
    return typeof jedan_u_nizu_za_filter === "number";
  })
);

console.log(
  qwe
    .map((jedannn) => {
      switch (typeof jedannn) {
        case "number":
          return jedannn * 5;
          break;
        case "string":
          return jedannn;
          break;
        case "object":
          return null;
          break;

        default:
          return jedannn;
          break;
      }
    })
    .filter((jedan) => {
      return jedan !== null;
    })
);

const niz = ["jedan", "dva", "tri"];

console.log("<ul>");
const html_elementi = niz.map((n) => {
  return `<li>${n}</li>`;
});
console.log(html_elementi);
console.log("</ul>");
