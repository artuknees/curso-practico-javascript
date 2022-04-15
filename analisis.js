// Helpers.
function es_par (numero) {
    // Función para definir si un número es par
    return (numero % 2 === 0)
};

// Mediana General
function mediana_salarios(lista) {
    const mitad = parseInt(lista.length /2);

    if (es_par(lista.length)) {
        const elemento_1 = lista[mitad - 1];
        const elemento_2 = lista[mitad];

        const mediana = (elemento_1+elemento_2)/2;
        return mediana;

    } else {
        const persona_mitad = lista[mitad];
        return persona_mitad;
    }; 
};

// generacion de lista de salarios
const salarios_col = colombia.map(
    function (person){
        return person.salary
    }
);

// ordenamiento de salarios
const salarios_sorted = salarios_col.sort(
    function(a,b){
        return a - b;
    }
);

// Mediana general
const mediana_general = mediana_salarios(salarios_sorted);

// Mediana del top 10%
const splice_start = parseInt(salarios_sorted.length*(9/10));

const splice_count = salarios_sorted.length-splice_start;

const salarios_top10 = salarios_sorted.splice(splice_start,splice_count)

const mediana_top_10 = mediana_salarios(salarios_top10);


console.log({
    mediana_general,
    mediana_top_10}
);
