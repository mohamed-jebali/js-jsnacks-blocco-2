// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let firstWord = prompt("inserisci la prima parola");
let secondWord = prompt("inserisci la seconda parola");


console.log(lengthWord(firstWord,secondWord));

function lengthWord (firstWord,secondWord){

    if(firstWord.length > secondWord.length){
        console.log("la prima parola è piu lunga");
        return firstWord
    }
    else if(firstWord.length < secondWord.length){
        console.log("la seconda parola è piu lunga");
        return secondWord
    }
    else{
        console.log("le due parole hanno la stessa lunghezza " + secondWord,firstWord);
        return firstWord, secondWord
    }
}

