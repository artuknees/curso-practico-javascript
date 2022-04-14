function calcular_precio_final(precio,descuento){
    const porcentaje_con_descuento = 100 - descuento;
    const precio_con_descuento = precio * (porcentaje_con_descuento/100);
    return precio_con_descuento;
}

function discount(codigo){
    const code = codigo;

    switch(code){
        case "Alfa":
            var disc = 10;
            break;
        case "Beta":
            var disc = 20;
            break;
        case "Gamma":
            var disc = 30;
            break;
        default:
            console.log("Código inválido")
    }
    return disc;
}


function onClickButtonPriceDiscount() {
    const input_price = document.getElementById("inputprice");
    const value_price = input_price.value;

    const input_disc = document.getElementById("inputdiscount");
    const value_disc = input_disc.value;

    const descuento_final = discount(value_disc)

    const precio_final = calcular_precio_final(value_price,descuento_final);

    if (value_disc == "Alfa" || value_disc == "Beta" || value_disc == "Gamma"){
        const result_d = document.getElementById("Result_discount");
        result_d.innerText = "Tu descuento fue de " + descuento_final + "%";
        
        const result_p = document.getElementById("Result_price");
        result_p.innerText = "El precio final a pagar es: $" + precio_final
    } else {
        const result_d = document.getElementById("Result_discount");
        result_d.innerText = "Ingresaste un cupón inválido";

        const result_p = document.getElementById("Result_price");
        result_p.innerText = ""

    }

}