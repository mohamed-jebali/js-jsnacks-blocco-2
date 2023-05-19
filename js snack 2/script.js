
let numberRandom = Math.random() * 100 + 1;
let inputUser = 0;
let indovinato = true

while(indovinato === false){

 inputUser = parseInt(prompt = "Indovina un numero da 1 a 100");

 if(inputUser === numberRandom){
   console.log("hai indovinato!")
 }
 else if (inputUser < numberRandom){
    console.log("il numero ")
 }

}
