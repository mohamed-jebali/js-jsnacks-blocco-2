// Creare una funzione che restituisca un array di quattro numeri randomici diversi tra loro tra 1 e 5 inclusi

let listNumber = [];
 
function randomNumber (){
    
    randomGenerator = Math.floor(Math.random() * 5) + 1;

    for(i = 0; randomGenerator.length < 4;i++){

        if(randomGenerator){
            listNumber.push(randomGenerator);
        }
    }

    return listNumber;
}
console.log(listNumber);