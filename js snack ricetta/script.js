// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..



let listRecipe = [];

let ingredientInput = document.querySelector("#ingredient-input");
let buttonAdd = document.querySelector(".add");
let ulListElement = document.querySelector(".list");


let buttonDishGenerator = document.querySelector(".dish-generator");

buttonAdd.addEventListener("click", function (){
    let inputElement = document.querySelector("input");
    listRecipe.push(inputElement);
    ulListElement.innerHTML += "<li>" + inputElement.value + "</li>";
    inputElement.value = "";

});


buttonDishGenerator.addEventListener('click', function (){

    document.querySelector("div.image-container").innerHTML =  '<img src="https://source.unsplash.com/700x400/?meal" alt="Random dish image">';

});
