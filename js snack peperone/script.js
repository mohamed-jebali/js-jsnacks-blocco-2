// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione



let listPeperoni = [
    createPeperone("Rosso",44,11,66,24),
    createPeperone("Verde",66,55,77,22),
    createPeperone("Giallo",77,66,88,22),
    createPeperone("Nero",77,66,88,22),
    createPeperone("Bianco",77,66,88,22),
    createPeperone("Magenta",77,66,88,22),
    createPeperone("Arancione",77,66,88,22),
    createPeperone("Grigio",77,66,88,22),
    createPeperone("Blu",77,66,88,22),
    createPeperone("Viola",77,66,88,22),
];


function createPeperone (colore,pesoMax,pesoMin,lunghezzaMax,lunghezzaMin){
    let peperone = {
        colore: colore,
        peso: Math.floor(Math.random() * (pesoMax - pesoMin + 1)) + pesoMin,
        lunghezza: Math.floor(Math.random() * (lunghezzaMax - lunghezzaMin + 1)) + lunghezzaMin
      };
    return peperone;
}

