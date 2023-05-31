/**
 *
 *
 *
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

Es: ['pippo', 'PLUTO', 'PapERino'] => ['Pippo', 'Pluto', 'Paperino']

 */


let listCity = ["roma","parigi","berlino","madrid","vienna"];

let newListCity = listCity.map(city => {
    
    return city.charAt(0).toUpperCase() + city.slice(1).toLowerCase();
  });

  console.log(newListCity);