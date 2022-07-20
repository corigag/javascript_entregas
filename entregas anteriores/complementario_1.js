//Pedir número  mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado

/*
let numeroUno = parseInt(prompt("ingrese un numero a ser sumado"))

for(let i = 0; i < 3 ; i++){

    let numeroDos = parseInt(prompt("ingrese otro numero para sumar al primero"));
    let resultado = numeroUno + numeroDos;

    console.log("el total de la suma es " , resultado)
}

//Pedir un texto mediante prompt, concatenar un valor en cada repetición, realizando una salida por cada resultado, hasta que se ingresa “ESC”.

let textoUno = prompt("ingrese textoUno");
let textoDos = ""

while( textoDos != "esc"){

    textoDos = prompt("ingrese textoDos");
    let concatenado = textoUno +" "+ textoDos;
    
    console.log(concatenado)
}
*/
//Pedir un número por prompt, repetir la salida del mensaje “Hola” la cantidad de veces ingresada.

let number = prompt ("ingrese un numero")

for( let i = 0 ; i < number ; i++){
    alert("hola")
}