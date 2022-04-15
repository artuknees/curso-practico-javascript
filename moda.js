function calcula_moda (lista_ingresada) {
    // const lista = [2,5,8,4,6,5,8,2,1,2];
    // Planteo una lista generica

    const lista_count = {};
    // el contador en cero

    lista_ingresada.map(
        function (elemento) {
            if (lista_count[elemento]) {
                lista_count[elemento] += 1;
            } else {
                lista_count[elemento] = 1;
            }
        }
    );
    // lleno el objeto lista_1_count con la cantidad de aparición de cada numero


    const lista_ordenada = Object.entries(lista_count).sort(
        function (a,b){
            return a[1] - b[1];
        }
    );
    // saco un array de arrays. En cada posición hay un array que dice el nombre y la cantidad de apariciones.
    // le hago el sort con ordenamiento numerico.
    // ahora el array de array esta ordenado por apariciones.

    
    const moda = lista_ordenada[lista_ordenada.length - 1];

    console.log("La moda del array ingresado es:");
    console.log(moda)
};