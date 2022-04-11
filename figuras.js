// Código del cuadrado

console.group("Cuadrado");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = 4* ladoCuadrado;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + " cm")

const areaCuadrado = ladoCuadrado**2;
console.log("El área del cuadrado es: " + areaCuadrado + " cm^2")

console.groupEnd();


// Código del triángulo.
console.group("Triángulos");

const ladoTriangulo_1 = 6;
const ladoTriangulo_2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Los lados del triángulo miden: " 
    + ladoTriangulo_1 + " cm, " + ladoTriangulo_2 
    + " cm y " + baseTriangulo + " cm"
);
console.log("La altura del triángulo es de: " + alturaTriangulo + " cm")

const perimetroTriangulo = ladoTriangulo_1 
    + ladoTriangulo_2 
    + baseTriangulo;

console.log("El perímetro del triángulo es: " + perimetroTriangulo + " cm")


const areaTriangulo = baseTriangulo*alturaTriangulo*(1/2);

console.log("El área del triángulo es: " + areaTriangulo + " cm^2")

console.groupEnd();


// Código del círculo.
console.group("Círculo");
const radioCirculo = 4;
const diametroCirculo = 2*radioCirculo;
const PI = Math.PI;

const perimetroCirculo = PI * diametroCirculo;

const areaCirculo = PI * (radioCirculo**2);

console.log("El radio del círculo es: " + radioCirculo + " cm");
console.log("El diámetro del círculo es: " + diametroCirculo + " cm");
console.log("PI es: " + PI);
console.log("El perímetro del círculo es: " + perimetroCirculo + " cm");
console.log("El área del círculo es: " + areaCirculo + " cm^2");

console.groupEnd();