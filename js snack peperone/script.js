// Crea un array di 10 oggetti che rappresentano un peperone, indicando per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutti i peperoni.

// Bonus:
// crea un peperone con una funzione



let listPeperoni = [];


function createPeperone (pesoMax,pesoMin,lunghezzaMax,lunghezzaMin){
    let peperone = {
        peso: Math.floor(Math.random() * (pesoMax - pesoMin + 1)) + pesoMin,
        lunghezza: Math.floor(Math.random() * (lunghezzaMax - lunghezzaMin + 1)) + lunghezzaMin
      };
    
}