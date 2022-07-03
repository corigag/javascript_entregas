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

//Seleccion del combo
let entrada_combo = prompt("ingrese el numero de combo de los productos que desea adquirir - 1 , 2 o 3 -");
let monto= " ";
seleccion_productos(entrada_combo);

//Calculo del monto a pagar en cada cuota
let precio_combo = seleccion_productos (entrada_combo);
let entrada_cuotas = prompt (" ingrese el numero de cuotas a pagar - 1 , 2 o 3 -");
pago_cuotas(entrada_cuotas);


let cuotas = pago_cuotas(entrada_cuotas);
alert("El combo numero " + entrada_combo + " tiene un valor de " + precio_combo + ". Debera pagar " + 
            entrada_cuotas + " cuotas sin interes de $" + cuotas + " ." ) 


/*Estos ciclos no funcionan, en ambos me salta error con la variable precio_combo cuando pasa a calcular el monto a pagar en cada cuota

CICLO CON DO...WHILE, mientras que el usuario ingrese el numero de 1 2 o 3 seguira iterando - 


do {
   //Seleccion del combo
     let entrada_combo = prompt("ingrese el numero de combo de los productos que desea adquirir - 1 , 2 o 3 -");
     let monto= " ";
     seleccion_productos(entrada_combo);
     
     //Calculo del monto a pagar en cada cuota
     let precio_combo = seleccion_productos (entrada_combo);
     let entrada_cuotas = prompt (" ingrese el numero de cuotas a pagar - 1 , 2 o 3 -");
     pago_cuotas(entrada_cuotas);
     
     
     let cuotas = pago_cuotas(entrada_cuotas);
     alert("El combo numero " + entrada_combo + " tiene un valor de " + precio_combo + ". Debera pagar " + 
                 entrada_cuotas + " cuotas sin interes de $" + cuotas + " ." ) 
}
while  (entrada_combo == 1 || entrada_combo == 2 || entrada_combo == 3 )


CICLO CON FOR, se cumple el ciclo 3 veces seguidas y corta -


for ( let i = 0 ; i < 3 ; i++){

     //Seleccion del combo
let entrada_combo = prompt("ingrese el numero de combo de los productos que desea adquirir - 1 , 2 o 3 -");
let monto= " ";
seleccion_productos(entrada_combo);

//Calculo del monto a pagar en cada cuota
let precio_combo = seleccion_productos (entrada_combo);
let entrada_cuotas = prompt (" ingrese el numero de cuotas a pagar - 1 , 2 o 3 -");
pago_cuotas(entrada_cuotas);


let cuotas = pago_cuotas(entrada_cuotas);
console.log("El combo numero " + entrada_combo + " tiene un valor de " + precio_combo + " .Debera pagar " + 
            entrada_cuotas + " cuotas sin interes de $" + cuotas + " ." )
}

  */