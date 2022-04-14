// console.log({
//     precio_original,
//     descuento,
//     porcentaje_con_descuento,
//     precio_con_descuento
// })

function calcular_precio_final(precio,descuento){
    const porcentaje_con_descuento = 100 - descuento;
    const precio_con_descuento = precio * (porcentaje_con_descuento/100);

    return precio_con_descuento;
    
}


function onClickButtonPriceDiscount() {
    const input_price = document.getElementById("inputprice");
    const value_price = input_price.value;

    const input_disc = document.getElementById("inputdiscount");
    const value_disc = input_disc.value;

    const precio_final = calcular_precio_final(value_price,value_disc);

    const result_p = document.getElementById("Result_price");
    result_p.innerText = "El precio final a pagar es: $" + precio_final
}

