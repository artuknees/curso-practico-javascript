const sram_xx1_50 = [10,12,14,16,18,21,24,28,32,36,42,50];

const sram_xx1_52 = [10,12,14,16,18,21,24,28,32,36,42,52];

const shimano_xtr_51 = [10,12,14,16,18,21,24,28,33,39,45,51];

const shimano_xtr_45 = [10,12,14,16,18,21,24,28,32,36,40,45];

const sram_42 = [10,12,14,16,18,21,24,28,32,36,42];

let cassette;

function check_group (pinon){
    switch(pinon){
        case "XX1 10-50":
            cassette = sram_xx1_50;
            break;
        case "XX1 10-52":
            cassette = sram_xx1_52;
            break;
        case "XTR 10-51":
            cassette = shimano_xtr_51;
            break;
        case "XTR 10-45":
            cassette = shimano_xtr_45;
            break;
        case "Sram 10-42":
            cassette = sram_42;
            break;
        default:
            return false;
    }
    return cassette;
}

function calcular_desarrollo (plato,pinon) {
    let desarrollo = [];
    if (check_group(pinon)){
        cassette.map(
            function(elemento){
                desarrollo.push(Number((plato/elemento).toFixed(2)))
            }
        )
    }
    return desarrollo;
};

function onclick_desarrollo_1(){
    const input_plato_1 = document.getElementById("input_plato_1");
    const value_plato_1 = Number(input_plato_1.value);

    const input_pinon_1 = document.getElementById("input_piñon_1");
    const value_pinon_1 = input_pinon_1.value;

    desarrollo_1 = calcular_desarrollo(value_plato_1,value_pinon_1);

    piñon_1 = check_group(value_pinon_1);
    rango_1 = Math.round((piñon_1[piñon_1.length-1]/piñon_1[0])*100);

    const result_desarrollo_1 = document.getElementById("desarrollo_resultado_1");
    result_desarrollo_1.innerText = "El desarrollo es:  " + desarrollo_1;

    const result_rango_1 = document.getElementById("rango_1");
    result_rango_1.innerText = "El rango es:  " + rango_1 + "%";

};

function onclick_desarrollo_2(){
    const input_plato_2 = document.getElementById("input_plato_2");
    const value_plato_2 = Number(input_plato_2.value);

    const input_pinon_2 = document.getElementById("input_piñon_2");
    const value_pinon_2 = input_pinon_2.value;

    desarrollo_2 = calcular_desarrollo(value_plato_2,value_pinon_2);

    piñon_2 = check_group(value_pinon_2);
    rango_2 = Math.round((piñon_2[piñon_2.length-1]/piñon_2[0])*100);

    const result_desarrollo_2 = document.getElementById("desarrollo_resultado_2");
    result_desarrollo_2.innerText = "El desarrollo es:  " + desarrollo_2;

    const result_rango_2 = document.getElementById("rango_2");
    result_rango_2.innerText = "El rango es:  " + rango_2 + "%";

};

