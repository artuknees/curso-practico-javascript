// Código del cuadrado

console.group("Cuadrado");

function perimetroCuadrado (lado) {
    return 4* lado;
};

function areaCuadrado (lado){
    return lado**2;
};

console.groupEnd();

// Código del triángulo.
console.group("Triángulos");

function perimetroTriangulo (lado_1,lado_2,base){
    return (lado_1 + lado_2 + base);
};

function areaTriangulo(base,altura){
    return ((base*altura)/2);
};

console.groupEnd();

// Código del círculo.
console.group("Círculo");

function diametroCirculo (radio){
    return (radio*2);
};

const PI = Math.PI;

function perimetroCirculo (radio){
    const diametro = diametroCirculo(radio);
    return (PI*diametro);
};  

function areaCirculo (radio){
    return (PI*(radio**2));
};

console.groupEnd();



// Aquí interactuamos con HTML
function calcular_perimetro_cuadrado (){
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("El perímetro del cuadrado es " + perimetro);
};

function calcular_area_cuadrado (){
    const input = document.getElementById("input_cuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("El área del cuadrado es " + area);
};

function calcular_perimetro_triangulo (){
    const input_lado1 = document.getElementById("input_lado_1_triangulo");
    const value_lado1 = Number(input_lado1.value);

    const input_lado2 = document.getElementById("input_lado_2_triangulo");
    const value_lado2 = Number(input_lado2.value);

    const input_base = document.getElementById("input_base_triangulo");
    const value_base = Number(input_base.value);

    const perimetro = perimetroTriangulo(value_lado1,value_lado2,value_base);
    alert("El perímetro del triángulo es " + perimetro);
};

function calcular_area_triangulo (){
    const input_base = document.getElementById("input_base_triangulo");
    const value_base = Number(input_base.value);

    const input_altura = document.getElementById("input_altura_triangulo");
    const value_altura = Number(input_altura.value);
    
    const area = areaTriangulo(value_base,value_altura);
    alert("El área del triángulo es " + area);
};

function calcular_perimetro_circulo (){
    const input = document.getElementById("input_circulo");
    const value = Number(input.value);

    const perimetro = perimetroCirculo(value);
    alert("El perímetro del círculo es " + perimetro);
};

function calcular_area_circulo (){
    const input = document.getElementById("input_circulo");
    const value = Number(input.value);

    const area = areaCirculo(value);
    alert("El área del círculo es " + area);
};

