// Código para calcular la altura de un triangulo isoceles
// Un triángulo isóceles posee dos lados iguales

function check (lado1,lado2,lado3){
    if (lado1 == lado2 && lado1 != lado3 && lado1 + lado2>lado3 || lado1 == lado3 && lado1 != lado2 && lado1 + lado3 > lado2|| lado2 == lado3 && lado2 != lado1 && lado2 + lado3 > lado1) {
        return true;
    } else {
        return false;
    };
};

function calculo (lado1,lado2,lado3){
    if (lado1 == lado2) {
        var altura = Math.sqrt((lado1**2)-((lado3/2)**2));
    } else if (lado1 == lado3) {
        var altura = Math.sqrt((lado1**2)-((lado2/2)**2));
    } else {
        var altura = Math.sqrt((lado2**2)-((lado1/2)**2));
    };
    return altura;
};

function altura (lado1,lado2,lado3){
    const flag = check(lado1,lado2,lado3);
    if (flag == true){
        return calculo (lado1,lado2,lado3);
    };
};

// Aquí interactuamos con HTML-
function calcular_altura (){
    const input1 = document.getElementById("input_lado1");
    const lado1 = Number(input1.value);

    const input2 = document.getElementById("input_lado2");
    const lado2 = Number(input2.value);

    const input3 = document.getElementById("input_lado3");
    const lado3 = Number(input3.value);

    if(altura(lado1,lado2,lado3)){
        const resultado = calculo(lado1,lado2,lado3);
        alert("Triangle height is " + resultado);

    } else {
        alert("This is not an iscoseles triangle or sides are impossible.")
    }
};
