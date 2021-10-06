// let numbers = [1, 2, 3, 4,"5"];

// function number2 (num){
//     return num *= 10;

// }
// console.log(numbers.map(number2));

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

// function firstName (fname){
//     return fname.firstname
// }

// console.log(persons.map(firstName))

//  const qwe = [40, 2, 3, 4, 5];

// console.log(qwe.push({sta_ja_radim:"trudim se da naucim Java Script"}));
// console.log(qwe);

// let index = 0;

// for (let index = 0; index < qwe.length; index++) {
//     if (qwe[index] == 2){
//   qwe[index] *= 2;
//     }

// }
// console.log(qwe)

// const myArr = [1,2,3,4,55];

// const students = [
//     { name: 'Quincy', grade: 96 },
//     { name: 'Jason', grade: 84 },
//     { name: 'Alexis', grade: 100 },
//     { name: 'Sam', grade: 65 },
//     { name: 'Katie', grade: 90 }
//   ];

// const result = students.filter(item => item.grade >= 90 && item.name.startsWith("Q"))

// console.log(result)

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(obj, pet){
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// var petCounts = pets.reduce(function (allPets, pet){
//     if (!allPets[pet]){
//         allPets[pet] = 1
//     } else{
//         allPets[pet] ++;
//     }
//     return allPets
// }
// );

// console.log(petCounts);

// var officers = [
//     { id: 20, name: 'Captain Piett' },
//     { id: 24, name: 'General Veers' },
//     { id: 56, name: 'Admiral Ozzel' },
//     { id: 88, name: 'Commander Jerjerrod' }
//   ];

// function id (officer){
//     return officer.id;
// }

// console.log(officers.map(id))

// var pilots = [
//     {
//       id: 10,
//       name: "Poe Dameron",
//       years: 14,
//     },
//     {
//       id: 2,
//       name: "Temmin 'Snap' Wexley",
//       years: 30,
//     },
//     {
//       id: 41,
//       name: "Tallissan Lintra",
//       years: 16,
//     },
//     {
//       id: 99,
//       name: "Ello Asty",
//       years: 22,
//     }
//   ];

//   const yearsExp = pilots.reduce (function (result, item){
//       return result + item.years;
//   }, 0)
// console.log(yearsExp)

// const mostExp = pilots.reduce(function (result, item){
//     return
// }
//  )

// var personnel = [
//     {
//       id: 5,
//       name: "Luke Skywalker",
//       pilotingScore: 98,
//       shootingScore: 56,
//       isForceUser: true,
//     },
//     {
//       id: 82,
//       name: "Sabine Wren",
//       pilotingScore: 73,
//       shootingScore: 99,
//       isForceUser: false,
//     },
//     {
//       id: 22,
//       name: "Zeb Orellios",
//       pilotingScore: 20,
//       shootingScore: 59,
//       isForceUser: false,
//     },
//     {
//       id: 15,
//       name: "Ezra Bridger",
//       pilotingScore: 43,
//       shootingScore: 67,
//       isForceUser: true,
//     },
//     {
//       id: 11,
//       name: "Caleb Dume",
//       pilotingScore: 71,
//       shootingScore: 85,
//       isForceUser: true,
//     },
//   ];

//   var forceUSers = personnel.filter(function (person) {
//       return person.isForceUser;
//   }
//   )

// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce(function (result, item) {
//   return result - item;
// }, 0);
// console.log(sum);

// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var allPets = pets.reduce (function (allPets, pet) {
//     if (allPets[pet]){
//         allPets[pet] ++;
//     } else{
//         allPets[pet] = 1;
//     }
//     return allPets;
// }, []); // vraca akumuliranu vrednost
// console.log(allPets);

// var niz = [
//   {
//     name: "Dragica",
//     prezime: "Mladenovic",
//   },
//   {
//     name: "Tijana",
//     prezime: "Golovic",
//   },
// ];

// var inicijali = niz.map(function (jedanUNizu) {
//   return jedanUNizu.name[0] + jedanUNizu.prezime[0];
// });
// console.log(inicijali);

// funkcija je parce koda koja ima neke parametre, a i ne mora, i koja moze i ne mora da vrati neki rezultat
// sluze da izvrsava neki kod i pomaze nam da imamo neki reusaable kod
// funkcija ima ime, otvorene/zatvorene obicne zagrade u koju mogu da se stave neki parametri koji mogu da budu opcioni
// ima i viticaste zagrade u kojima zivi logicki deo te funkcije

// function FullName(firstName, lastName, middleName = "") {
//   if (middleName !== "") {
//     return firstName + " " + middleName + " " + lastName;
//   }
//   return firstName + " " + lastName;
// }
// console.log(FullName("Dragica", "Mladenovic", "Vid"));

// ako imamo paranthesis, onda moramo da upisemo neki return
// unutar tih zagrada, a inace mozemo i bez njih da vratimo vrednost
// const es6Funkcija = () => {
//   return "test uspesan";
// };

// const es6FunkcijaBezViticastih = () => "opet test uspesan";

// console.log(es6Funkcija());
// console.log(es6FunkcijaBezViticastih());

// ovde mozete pored linije 222 staviti tacku, breakpoint,
// in onda iz vscode mozete da kliknete Run and Debug,
// pa da vidite kako se ova funkcija debaguje
function ovdeJeNekaFunkcija() {
  const qwe = "qwe";
  const asd = "asd";
  return qwe + " " + asd;
}

ovdeJeNekaFunkcija();

Reducer je funkcija koja za parametre prihvata funkciju
(sa parametrima AKUMULATOR i iterativna vrednost iz tog niza, jedna po jedna).
Akumulator se prenosi u svaki novi korak loopa, od zadate inicijalne vrednosti.
Konačni rezultat pokretanja reducera u svim elementima niza je jedna vrednost koja je rezultat kompletnog akumulatora.