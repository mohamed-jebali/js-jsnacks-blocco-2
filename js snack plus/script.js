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




let ulElement = document.querySelector(".list");

function addLiElement(liElementItem){
    let liElement = document.createElement("li");
    
    return liElement;
}

for(i = 0; i < 10 ;i++){

    let liItem = addLiElement(i);
    ulElement.appendChild("liItem");
}