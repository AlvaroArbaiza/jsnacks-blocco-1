/*
L'utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore.
*/

// let person = parseInt(prompt("Scrivi un numero"));

// let person2 = parseInt(prompt("Scrivi un numero"));

// if (person === person2) {
//     console.log("sono uguali")
// } else if (person > person2) {
//     console.log(person2)
// } else {
    // console.log(person)
// }


// --------------------------------

// let parola3 = prompt("Scrivi una parola");

// let parola4 = prompt("Scrivi una parola");

// if (parola3.length == parola4.length) {
//     console.log("sono uguali")
// } else if (parola4.length > parola3.length) {
//     console.log(parola4)
// } else {

//     console.log(parola3)
// }

// ------------------------------------------------

// let somma = 0;

// for ( let i=1; i <= 10; i++ ) {

//     let domanda = parseInt(prompt("scrivi un numero"));

//     somma += domanda;
// }
// console.log(somma)

// --------


let box = []

for ( let k=1; k <= 6; k++ ) {

    let domandona = parseInt(prompt("scrivi un numero please"));

    if ( domandona % 2 != 0) {
        box.push(domandona);
    } 
}

console.log(box)