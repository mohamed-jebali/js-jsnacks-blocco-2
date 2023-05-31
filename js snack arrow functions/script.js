/**

Crea un array composto da 15 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: 

nel primo array solo le auto a benzina,  // ciclo for 
nel secondo solo le auto a diesel,  // ciclo foreach
nel terzo il resto delle auto.  //array.filter

Infine stampa separatamente i 3 array.

/** */



let benzina = [];
let diesel = [];
let otherFuel = [];


let listCar = [

    {
        marca: "ford",
        modello: "fiesta",
        alimentazione: "diesel"
    },
    {
        marca: "fiat",
        modello: "punto",
        alimentazione: "benzina"
    },
    {
        marca: "nissan",
        modello: "juke",
        alimentazione: "diesel"
    },
    {
        marca: "tesla",
        modello: "model 3",
        alimentazione: "elettrico"
    },
    {
        marca: "dacia",
        modello: "duster",
        alimentazione: "metano"
    },
    {
        marca: "aston martin",
        modello: "x22",
        alimentazione: "gpl"
    },
    {
        marca: "porsche",
        modello: "cayenne",
        alimentazione: "benzina"
    },
    {
        marca: "jeep",
        modello: "renegade",
        alimentazione: "diesel"
    },
    {
        marca: "range rover",
        modello: "evoque",
        alimentazione: "diesel"
    },
    {
        marca: "renault",
        modello: "zoe",
        alimentazione: "elettrico"
    },
    {
        marca: "chevrolet",
        modello: "g33",
        alimentazione: "gpl"
    },
    {
        marca: "suzuki",
        modello: "s33",
        alimentazione: "gpl"
    },
    {
        marca: "citroen",
        modello: "ami",
        alimentazione: "elettrico"
    },
    {
        marca: "volkswagen",
        modello: "golf",
        alimentazione: "diesel"
    },
    {
        marca: "mercedes",
        modello: "cla",
        alimentazione: "benzina"
    },
]


for (let index = 0; index < listCar.length; index++) {
    const carBenzina = listCar[index];
    if (carBenzina.alimentazione === "benzina") {
        benzina.push(carBenzina);
        console.log(benzina);
    }
}


// listCar.forEach(diesel => {
//     if(diesel.alimentazione === "diesel")
//     console.log(diesel);
// });



// let otherCars = listCar.filter(car => car.alimentazione !== "benzina" && car.alimentazione !== "diesel");

// console.log(otherCars);