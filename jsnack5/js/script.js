/*Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.*/

const list = [];

for (i=1; i<=6; i++){
    let num = Number(prompt("Inserisci un numero:"));
    if (num % 2 != 0){
        list.push(num);
    }
}

if (list.length === 0){
    console.log("Non sono stati inseriti numeri dispari.");
} else {
    console.log(`I numeri dispari inseriti sono: ${list}`);
}