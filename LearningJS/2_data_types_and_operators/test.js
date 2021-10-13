// const qwe = 5;
// const asd = 10;
// const zxc = 5;

// console.log(qwe === zxc); // true
// console.log(qwe === asd); // false

// console.log(qwe === 5 && zxc === 10); // false
// console.log(qwe === 5 && zxc === 5); // true

// console.log(qwe === 5 || zxc === 7); // true
// console.log(qwe === 15 || asd === 10); // true
// console.log(qwe === 15 || zxc === 25); // false

// console.log(qwe === 15 || zxc === 25); // false

// console.log(qwe === 5 || (zxc === 25 && asd === 10)); // true

// console.log(qwe === 5) // true
// console.log(true) // true
// console.log(!true) // false

// let bool = true;

// function zzz() {
//     // promeni boolean
//     // if (bool === true) {
//     //     bool = false
//     // } else {
//     //     bool = true
//     // }
//     bool = !bool
// }

// console.log(bool); // true
// zzz();
// console.log(bool); // false
// zzz();
// console.log(bool); // true

const qwe = [];

/**
 *
 * @param {string} nekiNaziv
 * @param {number} nekaGodina
 * @returns
 */
const osoba = (tijana, igor) => {
  return {
    ime: tijana,
    godina: igor,
  };
};

qwe.push(osoba("tijana", 22));
qwe.push(osoba("igor", 23));
qwe.push(osoba("duca", 24));

qwe &&
  qwe.forEach(function (djura, index) {
    console.log("------------------");
    console.log("ovde osoba broj " + (index + 1)); // +1 za to index uvek pocinje sa 0
    console.log("zove se " + djura.ime);
    console.log("ima ovoliko godinica: " + djura.godina);

    djura.ime === 'igor' && console.log('on ima motorche!')
    djura.ime === 'tijana' && console.log('ona zivi u BG')
    djura.ime === 'duca' && console.log('...jam!!!')
  });

