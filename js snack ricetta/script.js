// ? Dati un input e due bottoni, l'utente popola una lista di ingredienti usando il primo bottone, al termine della quale preme un secondo bottone e viene generata un'immagine casuale di un pasto al centro dello schermo dopo 2 secondi per ogni ingrediente nella ricetta..



let listRecipe = [];

let ingredientInput = document.querySelector("#ingredient-input")
let buttonAdd = document.querySelector(".add");
let buttonDishGenerator = document.querySelector(".dish-generator");
let containerImage = document.querySelector("div.image-container");

buttonAdd.addEventListener("click", function (){

    document.createElement("li");
    inputUser.append(li);
});

buttonDishGenerator.addEventListener("click", function(){

    generateDish();

});

function generateDish (){

    
    let imageDish = document.createElement("img");


}