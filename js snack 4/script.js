// Dare la possibilità di inserire due parole.
// Verificare tramite una funzione che le due parole abbiano la stessa lunghezza.
// Se hanno la stessa lunghezza, stamparle entrambe altrimenti stampare la più lunga delle due.

let parolaUno = prompt("inserisci la prima parola");
let parolaDue = prompt("inserisci la seconda parola");


    if(firstWord.length > secondWord.length){
        console.log("la prima parola è piu lunga");
    }
    else if(firstWord.length < secondWord.length){
        console.log("la seconda parola è piu lunga");
    }
    else if(lengthWord (firstWord,secondWord)){
        console.log("le due parole hanno la stessa lunghezza " + secondWord,firstWord);
    }

    function lengthWord (firstWord,secondWord){
        if(firstWord.length === secondWord.length){
            return true;
        }
        return false;
    }

    /**
     *  
     */

