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
alert("El precio del viaje, por pasajero, sera: " + precioPasajero(a,cantPasajeros) + " Pesos Argentinos")
console.log(precioPasajero(a,cantPasajeros) + " Pesos Argentinos por pasajero.")