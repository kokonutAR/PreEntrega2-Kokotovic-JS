let cantPasajeros = prompt("Ingrese la cantidad de pasajeros (MAX: 19): ");
let respuesta

console.log("El viaje constara de " + cantPasajeros + " pasajeros");

if(cantPasajeros <= 13){
    respuesta = "Usted necesitara Una Combi de 13 asientos";
    alert(respuesta);
} else{
    respuesta = "Usted necesitara Un Minibus de 19 asientos";
    alert(respuesta);
}

let i = 1;
let maxCombi = 13;
let maxMinubus = 19;

for(i; i <= cantPasajeros; i++) {
    console.log("Pasajero Nº" + i);
}

let valorCombi = 12000
let valorMinibus = 16000

if(cantPasajeros <= 13){
    a = valorCombi;
}else{
    a = valorMinibus;
}
let precioPasajero = (a,cantPasajeros) => {
    return a / cantPasajeros;
}

alert("El precio del viaje, por pasajero, sera: " + precioPasajero(a,cantPasajeros) + " Pesos Argentinos");
console.log(precioPasajero(a,cantPasajeros) + " Pesos Argentinos por pasajero.");


class Viaje{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;   
    }
}

const combi = new Viaje("Combi", 12000);
const minibus = new Viaje("Minibus", 16000);

const arrayViajes = [combi, minibus];

const combiLargaDistancia = new Viaje("Combi Larga Distancia", 32000);
const minibusLargaDistancia = new Viaje("Minibus Larga Distancia", 40000);

arrayViajes.push(combiLargaDistancia, minibusLargaDistancia);

console.log(arrayViajes);


















