'use strict';
// Cuadrado
const ladoCuadrado = 5;
console.group('Cuadrado');
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimétro del cuadrado es: ' + perimetroCuadrado + 'cm');

const areaCuadrado = ladoCuadrado**2;
console.log('El área del cuadrado es: ' + areaCuadrado + 'cm^2');
console.groupEnd();

// Triángulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.group('Triángulo');
console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm y ' + baseTriangulo + 'cm');
const alturaTriangulo = 5.5;
console.log('La altura del Triángulo es: ' + alturaTriangulo);
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log('El perimétro del triángulo es: ' + perimetroTriangulo + 'cm');
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2');
console.groupEnd();

// Círculo
const radioCirculo = 4;
console.group('Círculo');
console.log('El radio del círculo es: ' + radioCirculo + 'cm');
const diametroCirculo = radioCirculo * 2;
console.log('El diametro del círculo es: ' + diametroCirculo + 'cm');
const PI = Math.PI;
console.log('La constante PI es: ' + PI);
const perimetroCirculo = PI * diametroCirculo;
console.log('El perimétro del círculo es: ' + perimetroCirculo + 'cm');
const areaCirculo = PI * radioCirculo**2;
console.log('El área del círculo es: ' + areaCirculo + 'cm^2');
console.groupEnd();
