// let asd = "ovde neki string";
// let qwe = "i ovde je dodatni text";

// console.log(asd);

// console.log(asd + " " + qwe);
// console.log((asd += qwe));

// let zxc = `ovde je super neki text ${qwe}`;

// console.log(zxc);
// let objekat = {
//   test: "zivot je lep",
// };

// console.log(`ime nekog filma je ${objekat.test}`);

// console.log(`ime nekog filma je ${objekat.test.replace("lep", "sladak")}`);

// // primeri funkcija
// asd = asd.replace("stringi", "string i");
// console.log(asd);

// /**
//  * regex pogledati dodatno:
//  * https://regex101.com/
//  * https://en.wikipedia.org/wiki/Regular_expression
//  */
// asd = asd.replace(/i/, "1").replace(/o/g, 0);
// console.log(asd);

// asd = asd.replace(/[0-9]/g, "__BROJ__");
// console.log(asd);

// // minus ne moze da se koristi da se obrise string
// // minus je iskljucivo aritmeticki operator
// // console.log('qwe' - 'asd'); // NaN

// // ako treba obrisati neki deo string-a
// // koristi se replace ili nesto slicno

// console.log("duzina string-a", "         asd      asd    ".length); // duzina ovog string-a
// console.log("         asd      asd    ".trim().length);
// console.log("         asd      asd    ".trimEnd().length);
// console.log("         asd      asd    ".trimStart().length);

// // pad funkciju mozemo da koristimo
// // ako nam treba fixni broj karaktera u string-u
// // primena recimo u broju kreditne kartice
// let padded = "qweqwe".padEnd(16, "_");

// console.log("padded: ", padded);
// console.log("padded.length: ", padded.length);

// // slice vraca poslednje karaktere
// console.log("posledji karakter u stringu".slice(-1));
// console.log("qwe: ", padded[padded.length]);
// console.log(padded[padded.length - 1]);

// // nula u nizu je prvi u nizu
// // nula u matematici je broj nula
// // "qweqweqwe".lenght -> dace broj 9
// // "qweqweqwe" -> je niz koji pocinje sa 0
// // zato moramo da uradimo -1 da bi dobili iz niza

// const niz_od_stringa = "qwe".split("");
// console.log("niz_od_stringa", niz_od_stringa);
// console.log(niz_od_stringa[0]);
// console.log(niz_od_stringa[niz_od_stringa.length]);
// console.log(niz_od_stringa[niz_od_stringa.length - 1]);
// console.log("i niz je objekat: ", typeof niz_od_stringa);

// const string_u_snake_case = "ovo_je_neki_string_u_snakecase";

// // Join je operacija koja postoji na array-u
// // Split je operacija koja postoji na string-u
// console.log("originalni string: ", string_u_snake_case);
// console.log("niz:", string_u_snake_case.split("_"));
// console.log("niz spojen:", string_u_snake_case.split("_").join(" "));
// console.log(
//   "niz spojen i velika slova:",
//   string_u_snake_case.split("_").join(" ").toUpperCase()
// );

// console.log(["ovo", "je", "nesto"].join("|"));

const substring_varijabla = "ovo je test za substring";
console.log(substring_varijabla.substring(1, 3));
console.log(substring_varijabla.substring(0, 11));
console.log(substring_varijabla.substring(9)); // do kraja, gde god on bio
console.log(substring_varijabla.substring(9, substring_varijabla.length)); // do kraja, definisano tako sto znamo duzinu string-a

// za domaci:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// prodjite funkcije sa string-ovima
