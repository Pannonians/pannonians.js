// objekat se kreira sa viticastim zagradama {} i sadrzi neku opcionu listu properties-a
// Property se moze definisati kao "key: value"
// gde je KEY neki string (propery name), a value moze da bude bilo sta
// slicni su nizovima, ali za razliku od nizova kojima pristupamo pomocu indeksa
// ojektima pristupamo kroz properties

// var myDog = {
//     name: "Hugo",
//     legs: 4,
//     tails: 1,
//     "his friends": ["Hutchie", "Max"],
//   };
  
//   console.log(myDog);

  
//   // objektima mozemo pristupiti na dva nacina
  
//   // 1. DOT NOTATION (.) - koriti se kada znamo ime properties-a
  
//   var testObj = {
//     hat: "ballcap",
//     shirt: "jersey",
//     shoes: "cleats",
//   };
  
//   var hatValue = testObj.hat;
//   var shirtValue = testObj.shirt;
  
//   console.log(hatValue);
//   console.log(shirtValue);
  
//   // 2. BRACKET NOTATION - korisiti se kada properties ima space u nazivu,
//   //    ali se moze koristiti i kod properties koji nemaju space
  
//   var testObj = {
//     "an entree": "hamburger",
//     "my side": "veggies",
//     "the drink": "water",
//   };
  
//   var entreeValue = testObj["an entree"];
//   var drinkValue = testObj["the drink"];
  
//   console.log(entreeValue);
//   console.log(drinkValue);
  
//   //   BRACKET NOTATION mozemo koristiti da pristupimo properties koji je predstavljen kao vrednosti varijable
  
//   var testObj = {
//     12: "Namath",
//     16: "Montana",
//     19: "Unitas",
//   };
  
//   var playerNumber = 16;
//   var player = testObj[playerNumber];
  
//   console.log(player);
  
//   //   kod kreiranog JS objekta uvek je moguce update-ovati njegov properties
  
  var myDog = {
    name: "Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };
  myDog.name = "Happy Coder";
  
  console.log(myDog);

  myDog.friends.push("novi prijatelj");

  console.log(myDog.friends.length)
  
  //   takodje mozemo dodati neki property kod vec postojeceg JS objekta
  
  var myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
  };
  
  myDog.bark = "woof";
  
  console.log(myDog);
  
  //   ili izbrisati neki property
  
  var myDog = {
    name: "Happy Coder",
    legs: 4,
    tails: 1,
    friends: ["freeCodeCamp Campers"],
    bark: "woof",
  };
  
  delete myDog.tails;
  
  console.log(myDog);
  
  //   koriscenje objekata za trazenje vrednosti, umesto switch
  
  // function phoneticLookup(val) {
  //     var result = "";
  
  //     switch(val) {
  //       case "alpha":
  //         result = "Adams";
  //         break;
  //       case "bravo":
  //         result = "Boston";
  //         break;
  //       case "charlie":
  //         result = "Chicago";
  //         break;
  //       case "delta":
  //         result = "Denver";
  //         break;
  //       case "echo":
  //         result = "Easy";
  //         break;
  //       case "foxtrot":
  //         result = "Frank";
  //     }
  
  //     return result;
  //   }
  
  //   phoneticLookup("charlie");
  
  function phoneticLookup(val) {
    var result = "";
  
    var lookup = {
      alpha: "Adams",
      bravo: "Boston",
      charlie: "Chicago",
      delta: "Denver",
      echo: "Easy",
      foxtrot: "Frank",
    };
  
    result = lookup[val];
  
    return result;
  }
  
  phoneticLookup("charlie");
  
  console.log(phoneticLookup("charlie"));
  
  //   proveravanje da li neki objekat ima property
  
  function checkObj(obj, checkProp) {
    // Only change code below this line
    var obj = {
      gift: "pony",
      pet: "kitten",
      bed: "sleigh",
    };
    if (obj.hasOwnProperty(checkProp)) {
      return obj[checkProp];
    } else {
      return "Not Found";
    }
    // Only change code above this line
  }
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "gift"));
  console.log(checkObj({ gift: "pony", pet: "kitten", bed: "sleigh" }, "pet"));
  
  //   objekti su jedan od nacina za manipulisanje fleksibilnim podacima (dodavanje novih podataka
  //   u postojecu varijablu)
  
  var myMusic = [
    {
      artist: "Billy Joel",
      title: "Piano Man",
      release_year: 1973,
      formats: ["CD", "8T", "LP"],
      gold: true,
    },
    {
      artist: "Nick Cave",
      title: "Good Son",
      release_year: 1990,
      formats: ["CD", "tape", "LP"],
    },
  ];
  
  // pristupanje objektima u oviru objekta
  
  var myStorage = {
    car: {
      inside: {
        "glove box": "maps",
        "passenger seat": "crumbs",
      },
      outside: {
        trunk: "jack",
      },
    },
  };
  
  var gloveBoxContents = myStorage.car.inside["glove box"];
  
  console.log(gloveBoxContents);
  
  // pristupanje nizovima u okviru objekta
  
  var myPlants = [
    {
      type: "flowers",
      list: ["rose", "tulip", "dandelion"],
    },
    {
      type: "trees",
      list: ["fir", "pine", "birch"],
    },
  ];
  
  var secondTree = myPlants[1].list[1];
  
  console.log(secondTree);
  
  
  // igor zavrsio

  
const qwe = {
  user: {
    user_notes: [
      {
        created_at: "2021-09-24T14:01:50.940Z",
        message: " qwewq e qwe",
        admin: {
          email: "petar@kikoff.com"
        }
      },
      {
        created_at: "2021-09-14T20:50:44.173Z",
        message: "Notes1!!",
        admin: {
          email: "petar@kikoff.com"
        }
      },
    ],
  },
  admin: {
    isAdmin: true
  }
}

qwe.user.user_notes.forEach(jedan => {
  console.log(`${jedan.admin.email} (${jedan.created_at}) : ${jedan.message}`)
})

// const slova = (broj) => {
//   switch (broj) {
//     case 'alpha':
//       return "jedan"
//     case 'beta':
//       return "dva"
//     default:
//       return null
//   }
// }

// console.log(slova('alpha'))
// console.log(slova('beta'))
// console.log(slova('gamma'))

// const slova = {
//   alpha: 'jedan',
//   beta: 'dva',
//   gamma: 'tri'
// }

// console.log(slova.alpha)
// console.log(slova.beta)
// console.log(slova.gamma)

// importovani fajlovi, komponente, kao
// ovo je simulacija recimo react-a
const komponenta_plavo_dugme = "plavo dugme";
const komponenta_crveno_dugme = "crveno dugme";
const komponenta_zeleno_dugme = "zeleno dugme";
const komponenta_ljubicasto_dugme = 'ljubicasto dugme'

const podatak = {
  boja_dugmeta: 'crveno_dugme'
}

// ovo je kao simulacija da pisemo neki
// html da bi prikazali komponentu
const dugme = {
  plavo_dugme: komponenta_plavo_dugme,
  crveno_dugme: komponenta_crveno_dugme,
  zeleno_dugme: komponenta_zeleno_dugme,
  ljubicasto_dugme: komponenta_ljubicasto_dugme
}

// ako bi koristili object notation
console.log(dugme[podatak.boja_dugmeta])

// ako ne bi koristili object notation
// podatak.boja_dugmeta === 'plavo_dugme'
//   ? console.log(komponenta_plavo_dugme)
//   : podatak.boja_dugmeta === 'crveno_dugme'
//   ? console.log(komponenta_crveno_dugme)
//   : podatak.boja_dugmeta === 'zeleno_dugme'
//   ? console.log(komponenta_zeleno_dugme)
//   : podatak.boja_dugmeta === 'ljubicasto_dugme'
//   ? console.log(komponenta_ljubicasto_dugme)
//   : console.log('nema')