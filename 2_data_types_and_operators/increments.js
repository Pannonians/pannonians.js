/**
 * Summary:
 * broj mozemo da pomerimo za +1 tako sto cemo napisati
 * broj++ ili ++broj.
 * 
 * Ove dve funkcije su manje vise iste, s'tim da:
 * - broj++ vraca staru vrednost broja
 * - ++broj vraca novu vrednost broja
 * 
 * primer dole 
 */

let qwe = 5;

console.log("1: " + qwe++); // 5
qwe = 5; //reset na broj pet
console.log("2: " + ++qwe); // 6
