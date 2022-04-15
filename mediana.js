function calcular_media_arit (lista){
    // Función para calcular promedio aritmético
    const suma_lista = lista.reduce(
        function (valor_acumulado = 0 , elemento_actual) {
            return valor_acumulado + elemento_actual
        }
    );
    var promedio = suma_lista/lista.length;
    return promedio;
};

function es_par (numero) {
    // Función para definir si un número es par
    if (numero % 2 === 0){
        return true;
    } else {return false}
};

// function compareNumbers (a,b) {
//     // Función para hacer el sort comparando numeros
//     return a - b;
// };

function calcular_mediana (array){
    // Función para calcular la mediana del array que ingrese
    let new_array = array.sort(function(a,b){
        return a - b;
    });
    console.log("Array ordenado: " + new_array)
    // Con esto ya lo ordené

    const mitad_lista = parseInt(new_array.length / 2);

    let mediana;

    if (es_par(new_array.length)) {
        const elemento_1 = new_array[mitad_lista - 1];
        const elemento_2 = new_array[mitad_lista];
        const promedio_1_2 = calcular_media_arit([elemento_1,elemento_2]);
        mediana = promedio_1_2;
    } else {
        mediana = new_array[mitad_lista];
    }; 
    return mediana;
};

console.log("Ingrese el los numeros a procesar. Por ejemplo calcular_mediana([1,5,6,2])")
