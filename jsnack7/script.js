// Dato un array e un elemento da cercare come argomenti
// restituisce true se l'elemento è presente
// restituisce false se l'elemento non è presente
function inArray(numberList, element) {
    for (let i = 0; i < numberList.length; i++) {
        if(element === numberList[i]){
            return true;
        } else {
            return false;
        }
    }
}

// Test
const numbers = [1, 2, 3];

console.log("Passo l'array e 1, mi aspetto true", inArray(numbers, 1));
console.log("Passo l'array e 5, mi aspetto false", inArray(numbers, 5));