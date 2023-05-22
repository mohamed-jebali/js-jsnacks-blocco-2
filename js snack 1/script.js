let listNumber = [];
let sum = 0;


while(sum < 50){
  let inputNumber = parseInt(prompt("Inserisci un numero:"));
  listNumber.push(inputNumber);
  sum += inputNumber;

}
console.log("fine del ciclo" ,listNumber);