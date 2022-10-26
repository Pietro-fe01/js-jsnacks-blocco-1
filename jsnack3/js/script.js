// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la 
// parola più lunga.

const wordOne = prompt("Inserisci la prima parola");

const wordSecond = prompt("Inserisci la seconda parola");

if (wordOne.length < wordSecond.length){
    console.log(wordOne + " / " + wordSecond);
} else if (wordSecond.length < wordOne.length){
    console.log(wordSecond + " / " + wordOne);
} else {
    console.log("Le parole hanno la stessa lunghezza");
}