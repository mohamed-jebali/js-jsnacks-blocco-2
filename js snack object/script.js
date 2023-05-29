// Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
//     Codice giocatore
//     Nome
//     Cognome
//     Età
//     Media punti fatti per partita
//     Percentuale di successo per tiri da 3 punti
//     Stoppate 
//     Tiri 

// Generare casualmente le statistiche di gioco, secondo queste regole:
//     il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali
//     la media punti fatti per partita deve essere compresa tra 0 e 50
//     la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
//     le stoppate sono un numero intero compresot ra 0 e 30
//     i tiri sono un numero intero compreso tra 20 e 100



let player = {

    codiceGiocatore: 99,
    nome: "Lebron",
    cognome : "James",
    eta: 32,
    mediaPuntiPerPartita: 30,
    percentualeDisuccesoTiri: "70%",
    stoppate: parseInt(randomNumber(0,30)),
    tiri: randomNumber(20,100),

}
console.log(player);


function randomNumber (min,max){

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function stringLenght (length){



}