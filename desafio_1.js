//Determinar el valor del combo de productos elegido por el usuario, luego calcular el monto a pagar en cuotas.

function seleccion_productos (entrada_combo){

    if( entrada_combo == 1){
            
        monto = 2200;
        return monto;
    }
    else if (entrada_combo == 2){
        
        monto = 4500;
        return monto;
    }
    else if (entrada_combo == 3){
        
        monto = 5800;
        return monto;
    }
    else {
        console.log("ingrese un numero de combo valido" ); 
    }
}

function pago_cuotas(entrada_cuotas){

    if( entrada_cuotas == 1){

      let cuota_uno = precio_combo; 
      return cuota_uno      
    }
    else if ( entrada_cuotas == 2){

        let cuota_dos = precio_combo / 2
        return cuota_dos
    }
    else if( entrada_cuotas == 3){

        let cuota_tres = precio_combo / 3
        return cuota_tres  
    }
    else{
        console.log ("se podran pagar hasta 3 cuotas")
    }
}

//CICLO CON WHILE, mientras que el usuario ingrese el numero de 1 2 o 3 seguira iterando - 

let entrada_combo = "";
let precio_combo = seleccion_productos (entrada_combo);
let entrada_cuotas = "";
let cuotas = pago_cuotas(entrada_cuotas);


while  (entrada_combo <= 3) {

     //Seleccion del combo
entrada_combo = prompt("ingrese el numero de combo de los productos que desea adquirir - 1 , 2 o 3 -");
let monto= " ";
seleccion_productos(entrada_combo);

//Calculo del monto a pagar en cada cuota
precio_combo = seleccion_productos (entrada_combo);
entrada_cuotas= prompt (" ingrese el numero de cuotas a pagar - 1 , 2 o 3 -");
pago_cuotas(entrada_cuotas);


cuotas = pago_cuotas(entrada_cuotas);
console.log("El combo numero " + entrada_combo + " tiene un valor de " + precio_combo + " .Debera pagar " + 
            entrada_cuotas + " cuotas sin interes de $" + cuotas + " ." )
}

 