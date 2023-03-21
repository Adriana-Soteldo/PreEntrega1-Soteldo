alert("A un paso de tu Primera Cuenta de Ahorros")
const nombre = prompt("Ingrese su nombre")
const apellido = prompt("Ingrese su apellido")
let edad = prompt("Ingrese su edad")

if (edad >= 18){
    esMayorDeEdad()
    crearCuenta()
} else {
    esMenorDeEdad()
    
}

function crearCuenta(){
    let id = prompt("Indicame tu ID") 
    let idValido = false
    
    for (let i = 1; i<= id.length ; i++){
        if (i >= 8 && i<= 10) {
            idValido=true
        } 
    }
    if (idValido) {
    console.log ("Gracias estas mas cerca") 
    } else {
        console.log("ID invalido intentalo de nuevo")
    }
}

function esMayorDeEdad(){
    console.log ("Bienvenido " + nombre + " " + apellido + " al HomeBanking")  
    
}

function esMenorDeEdad(){
    console.log("Lo siento " + nombre + " " + apellido + " no cumples con la condicion")
    
}