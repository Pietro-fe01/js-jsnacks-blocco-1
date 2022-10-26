// Il software deve chiedere per 10 volte all’utente di
// inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let sum = 0;
console.log("Numeri inseriti:");
for (let i = 1; i<=10; i++){
    const num = Number(prompt("Inserisci un numero"));
    console.log(num);
    sum = sum + num;
}

console.log(`La somma di tutti i numeri inseriti è ${sum}`);