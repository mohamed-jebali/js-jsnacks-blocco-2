/**
 * 
 * Generare una lista usando una funzione:
 * nell'html ci dovrà essere esclusivamente un elemento ul parent,
 * attraverso una funzione creiamo un singolo elemento html di tipo li
 * poi ne aggiungiamo una decina all'ul, sempre via js.
 * 
 * BONUS:
 * Se clicchiamo sul li il suo testo verrà sbarrato.
 */




let ulElement = document.querySelector("ul");

function addLiElement(liItem){
    let liElement = document.createElement("li");
    liItem.classList.add("list-item");
    liElement.innerHTML = "item";
    return liElement;
}

for(i = 0; i < 10 ;i++){

    let liItem = addLiElement();
    ulElement.appendChild("liItem");
}
console.log(ulElement);