

// - PreEntrega 1 Jeffrey Verdu - Comisión 52235

let copias = 0
let tamano = ""
let opcion = 0

alert("Bienvenido a la impresión de documentos")

do {
    tamano = prompt("¿De qué tamaño es su impresion (carta/oficio)?").toLowerCase()
    if (tamano != "carta" && tamano != "oficio"){
        alert("Ingrese un tamaño válido")
    }
} while (tamano != "carta" && tamano != "oficio") // Se verifica que el tamaño sea válido

do {
    copias = prompt("¿Cuántas copias quiere imprimir (entre 0-100)?")
    if (copias < 0 || copias > 100 || isNaN(copias)){
        alert("Ingrese un número válido")
    }
} while (copias < 0 || copias > 100 || isNaN(copias)) // Se verifica que el número de copias sea válido

function costo(copias, tamano){
    let costo = 0
    if (tamano == "carta"){
        costo = copias * 10
        alert("El costo de su impresión es de: $" + costo)
    } else {
        costo = copias * 15
        alert("El costo de su impresión es de: $" + costo)
    }
} // Se calcula el costo de la impresión

function total(copias, tamano){
    let total = 0
    if (tamano == "carta"){
        total = (copias * 0.28).toFixed(2)
        alert("La cantidad de metros de su impresión es de: " + total)
    } else {
        total = (copias * 0.33).toFixed(2)
        alert("La cantidad de metros de su impresión es de: " + total)
    }
} // Se calcula la cantidad de metros de la impresión

do {
    opcion = prompt("¿Qué desea hacer?\n1. Calcular costo de impresión\n2. Calcular total de metros de impresion\n0. Salir")
    switch (opcion){
        case "1":
            costo(copias, tamano)
            break
        case "2":
            total(copias, tamano)
            break
        case "0":
            alert("Gracias por usar nuestro servicio")
            break
        default:
            alert("Ingrese una opción válida")
    }
} while (opcion != 0) // Se da la opción de calcular el costo o la cantidad de metros de la impresión