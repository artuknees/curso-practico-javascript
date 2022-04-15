function calcular_media_arit (lista){

    // let suma_lista = 0;
    // for (let i = 0; i< lista.length;i++) {
    //     suma_lista = suma_lista + lista[i];
    // };

    const suma_lista = lista.reduce(
        function (valor_acumulado = 0 , elemento_actual) {
            return valor_acumulado + elemento_actual;
        }
    );

    var promedio = suma_lista/lista.length;
    return promedio;
    };