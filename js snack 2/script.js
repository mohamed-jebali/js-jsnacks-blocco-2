
let numberRandom = Math.floor(Math.random() * 100 + 1);
console.log(numberRandom);
let inputUser = 0;
let indovinato = false


while(!indovinato){

    inputUser = parseInt(prompt( "Indovina un numero da 1 a 100"));
    console.log(inputUser);

 if (inputUser < numberRandom){
    prompt(("il numero è piu grande"));
 }
 else if (inputUser > numberRandom){
    prompt(("il numero è piu piccolo"));
 }
 else{
    indovinato = true;
 }

}
if(indovinato === true){
    console.log("hai indovinato!");
}

