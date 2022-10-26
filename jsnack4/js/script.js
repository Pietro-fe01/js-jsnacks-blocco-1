/*In un array sono contenuti i nomi degli invitati alla 
festa del grande Gatsby, chiedi all’utente il suo nome e 
comunicagli se può 
partecipare o no alla festa.*/


const invitatiFesta = ["Samuele", "Marco", "Pietro", "Luca", "Antonio"];

const utente = prompt("Per entrare alla festa, ho bisogno di controllare il suo nome, come si chiama?");

let found = false;
for (let i = 0; i < invitatiFesta.length && found === false; i++) {
    if(utente === invitatiFesta[i]){
        console.log("Presente in lista, Benvenuto!");
        found = true;
    }
}

if (found === false){
    console.log("Non presente nella lista, purtroppo non puoi entrare.");
}