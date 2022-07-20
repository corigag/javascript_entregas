/*

Simulador de un e-commerce.

Tareas a desarrollar :

1- Cargar los productos.
2- Hacer un menu con opciones.
3- Crear funciones para :
    1-Agregar producto al carrito
    2-Mostrar productos del carrito
    3-Mostrar monto total de los productos elegidos
    4-Aplicar descuento 

    */

//1- Carga de productos 
//Carga de los productos disponibles mediante un array de objetos.

const productos = [
    {
        id:1,
        nombre: 'Shampoo',
        valor: 900,
        detalle: 'shampoo solido de 100g',
        stock: 80,
        categoria: 'higiene'
    }, 
    {
        id:2,
        nombre: 'Acondicionador',
        valor: 900,
        detalle: 'acondicionador solido de 75g',
        stock: 60,
        categoria: 'higiene'
    },
    {
        id:3,
        nombre: 'Crema de día',
        valor: 1400,
        detalle: 'crema de calendula y manzanilla, envase retornable',
        stock: 25,
        categoria: 'cuidado de la piel'
    },
    {
        id:4,
        nombre: 'Crema de noche',
        valor: 1400,
        detalle: 'crema de lavanda y flor de hibisco, envase retornable',
        stock: 25,
        categoria: 'cuidado de la piel'
    },
    {
        id:5,
        nombre: 'Crema medicinal',
        valor: 1500,
        detalle: 'crema de cannabis y jarilla, envase retornable',
        stock: 19,
        categoria: 'cuidado de la piel'
    },
    {
        id:6,
        nombre: 'Repelente',
        valor: 1700,
        detalle: 'Repelente natural para mosquitos',
        stock: 8,
        categoria:'higiene'
    },
    {
        id:7,
        nombre: 'Balsamo labial',
        valor: 500,
        detalle: 'Balsamo labial de manteca de cacao, envase retornable',
        stock: 15,
        categoria:'cuidado de la piel'
    }
]

const carrito = [];

//2- Hacer un menu con opciones.( continua al final del archivo ya que esta vinculado a funciones que se desarrollan luego)
//Mediante un ciclo while, que se cortara cuando el usuario presione 0.
//Luego mediante un ciclo con switch se asocia cada opcion elegida con la ejecucion de una funcion.

const menu = 'Bienvenido a la tienda de Hampi Yura\n Seleccione un numero para comenzar\n 1 - Seleccionar productos\n 2 - Ver mi carrito de compras\n 3 - Ver monto total de mi compra\n 4 - Aplicar descuento\n 0 - Salir '

//3 - Crear las funciones para ejecutar los items del menú

//OPCION 1 - Seleccionar productos
//Recorre el array con un forOf para mostrar los productos y que el usuario elija.  Los productos elegidos se agregan con el metodo push
//al array carrito[] creado previamente. 


function addProduct(){

    let catalogo = '';
    let indice = 1 ;
    for (const element of productos) {   
        
        catalogo += indice++ + " - " + element.nombre + "\n" ;
    };
    let lista = prompt("Selecciona el producto para sumar a tu carrito " + "\n" + catalogo);
    carrito.push(productos[lista - 1]);
    console.log(carrito)
}

//OPCION 2 - Ver mi carrito de compras
//Similar a la funcion anterior, recorre el array carrito[] con un for Of , va enumerando los productos elegidos con la variable indice 
//y se muestran en un alert.

function showCart(){

    let compra = '';
    let indice = 1;
    for (const element of carrito) {
        
        compra += indice++ + ' - ' + element.nombre + "\n" ;
    };

    alert(compra)
}

//OPCION 3 - Ver monto total de mi compra
//Recorre el array carrito[] con un forOf para mostrar cada producto con su valor
//Con la High Order Function reduce() , realiza la suma de los productos elegidos
// Muestra lista y total de la compra en un alert 

function showTotal(){

    let compra= '';
    let indice= 1;
    for (const element of carrito) {
        
        compra += indice++ + ' - ' + element.nombre + ' $ ' + element.valor + "\n" ;
        
    };
    let total = carrito.reduce((acumulador , element) => acumulador + element.valor , 0) 
    alert( compra + '\n' + 'El total de su compra es $' + total)
}

//OPCION 4 - Aplicar descuento
//Recorre nuevamente el array carrito[] con un forOf para sumar el valor total de los productos elegidos
//Calcula el 20% de descuento sobre el total
//Aplica descuento al monto total de la compra y lo muestra en un alert

function applyDiscount(){

    let total= 0 ;
    for (const element of carrito) {
        
        total += element.valor
    };

    let descuento = total * 0.2
    let totalDescuento = total - descuento

    alert('El monto total a pagar con el 20% de descuento es $ ' + totalDescuento)
    
};

//Opciones del menu 
//Mediante un ciclo while que se cortara cuando el usuario elija la opcion "6 - salir"
//Mediante el ciclo switch cada opcion elegida ejecutara la función correspondiente 

while(true){

    let inicio = parseInt(prompt(menu));
    switch(inicio){

        case 1:
        addProduct();
        break;

        case 2:
        showCart();
        break;
                
        case 3:
        showTotal();
        break;

        case 4:
        applyDiscount();
        break;

        case 0:
        alert('Gracias por elegir Hampi Yura');
        break;

        default:
        break;
    }
    
    if( inicio == 0){

        break;
    }   
}