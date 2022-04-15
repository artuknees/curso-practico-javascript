// calculo de un promedio ponderado
// (c1*i1)+...+(cn*in)/sum(i) = 7.33
// sum(c)/len(componentes) = 7.5

const componentes = [
    {componente: "cuadro",
    importancia: 3,
    calificacion: 8},

    {componente: "ruedas",
    importancia: 3,
    calificacion: 7},

    {componente: "manillar",
    importancia: 1,
    calificacion: 9},

    {componente: "transmision",
    importancia: 2,
    calificacion: 6},
];

let valor_media_aritmetica = 0;

componentes.map(
    function (elemento) {
        valor_media_aritmetica += elemento.calificacion;
    }
);

// Se calcula la media aritmética
const media_aritmetica = valor_media_aritmetica/(componentes.length)

let valor_media_ponderada = 0;
let suma_importancias = 0;

componentes.map(
    function (elemento) {
        valor_media_ponderada += ((elemento.calificacion) * (elemento.importancia));
        suma_importancias += elemento.importancia;
    }
);

const media_ponderada = valor_media_ponderada/suma_importancias;
