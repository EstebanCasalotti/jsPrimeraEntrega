class juegos {
    constructor(nombre, genero, lanzamiento, precio) {
        this.nombre = nombre;
        this.genero = genero;
        this.lanzamiento = lanzamiento;
        this.precio = precio;
    }
}

// todos los juegos
const juego0 = new juegos("Dragon ball budokai tenkaichi 3", "accion", "4 de octubre de 2007", 1500);
const juego1 = new juegos("Crash tag team racing", "combate en vehículos","19 de octubre de 2005", 2000);
const juego2 = new juegos("Resident evil 4", "Horror de supervivencia", "11 de enero de 2005", 2000);
const juego3 = new juegos("Resident evil 5", "Horror de supervivencia", "5 de marzo de 2009", 3300);
const juego4 = new juegos("Devil May Cry 3", "acción y aventura", "17 de febrero de 2005", 2900);
const juego5 = new juegos("Devil May Cry 4", "acción y aventura", "31 de enero de 2008", 3400);
const juego6 = new juegos("Silent Hill 2", "supervivencia y acción-aventura", "24 de septiembre de 2001", 2300);
const juego7 = new juegos("Silent Hill Origins", "supervivencia y acción-aventura", " 6 de noviembre de 2007", 3200);


// array vacio
let compra = [];

// ciclo
let selector = confirm("Desea seleccionar algun juego?");
while (selector) {

    const seleccionar = prompt("Que juego desea agregar al carrito? Para seleccionar un juego, escriba un numero de 0 a 7");

    switch (seleccionar) {
        case "0":
            compra.push(juego0);
            alert(`ha seleccionado ${juego0.nombre} su valor es de ${juego0.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            break;

        case "1":
            alert(`ha seleccionado ${juego1.nombre} su valor es de ${juego1.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego1);
            break;
        
        case "2":
            alert(`ha seleccionado ${juego2.nombre} su valor es de ${juego2.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego2);
            break;
        
        case "3":
            alert(`ha seleccionado ${juego3.nombre} su valor es de ${juego3.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego3);
            break;
        
        case "4":
            alert(`ha seleccionado ${juego4.nombre} su valor es de ${juego4.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego4);
            break;

        case "5":
            alert(`ha seleccionado ${juego5.nombre} su valor es de ${juego5.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego5);
            break;
        
        case "6":
            alert(`ha seleccionado ${juego6.nombre} su valor es de ${juego6.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego6);
            break;

        case "7":
            alert(`ha seleccionado ${juego7.nombre} su valor es de ${juego7.precio}`)
            selector = confirm("Quiere agregar algun otro?");
            compra.push(juego7);
            break;

        default:
            alert(`opcion invalida, intente nuevamente`);
            break;    
    }  
}
console.log(compra)

function precioDeTodo() {
    let precioFinal = 0;
    for (const datos of compra) {
        precioFinal = precioFinal + datos.precio;
    }
    return precioFinal;
}
alert(`El total de juegos es ${compra.length} y el precio final es de $${precioDeTodo()}`);