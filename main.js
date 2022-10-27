// -nome normale: `Bob`
// -nome ribaltato: e ancora `bob`?
// -bob == bob -> si
// -parola palindroma
// */
//Stampo numeri da 100 a 0
function myFunction() {
    let parola = document.getElementById(`inputParola`).value.toLowerCase(); //value prende il valore scritto nell'input //toLowerCase(); le maiuscuole perdono di significato, prendi lo stesso il valore come buono
    let parolaReverse = ``;
    console.log(parola.length)  //lunghezza = 4

    for (let i = parola.length - 1; i >= 0; i--) {
        parolaReverse += parola[i];
        if (parolaReverse == parola) {
            document.getElementById(`stampaParola`).innerHTML = `Questa parola è un palindromo: ${parola}!!!`// è come il value ma vuol dire stampa proprio dentro all'html l'intero TAG incvece con innerText solo testo
        }
        else{
            document.getElementById(`stampaParola`).innerHTML = `Questa parola è na strunzat ${parola}!!!`// è come il value ma vuol dire stampa proprio dentro all'html l'intero TAG incvece con innerText solo testo
        }
    }
    console.log(`${parolaReverse}`);
}

function functionGame() {
let pariDispari = prompt(`Pari o dispari?`);
let num = prompt(`Scegli un numero tra 1 e 5`);
let numRandom = Math.floor( Math.random() * 5 ) + 1;
let sum = num + numRandom;
sumNumbers(num);

}
function sumNumbers(sum1);{
    if (sumNum % 2 == 0) {
        document.getElementById(`stampaVincitore`).innerHTML = `pari ${num}!!!`
    } 
}
