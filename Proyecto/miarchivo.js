alert("Y si empezamos a Ahorrar?")
const nombre = prompt("Nombrecito")
const apellido = prompt("Y te apellidas")
let edad = prompt("No tengas pena y dime tu edad")

const cliente = {nombre, apellido , edad, id:"", ciudad:"", telefono:""} 

if (edad >= 18){
    esMayorDeEdad()
    crearCuenta()
} else {
    esMenorDeEdad()
    
}

function crearCuenta(){
    let id = prompt("Indicame tu DNI") 
    let idValido = false
    
    for (let i = 1; i<= id.length ; i++){
        if (i >= 8 && i<= 10) {
            idValido=true
        } 
    }
    if (idValido) {
    console.log ("Gracias estas mas cerca") 
    alert("Continuemos con el proceso")
        let ciudad = prompt("Dire")
        let telefono = prompt("y telefono")
        cliente.ciudad = ciudad
        cliente.telefono = telefono
        cliente.id = id

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

console.log ("Datos de Cliente: ",cliente)
console.log (cliente.apellido)
console.log (cliente.edad)
console.log (cliente.id)
console.log (cliente.ciudad)
console.log (cliente.telefono)


alert("Que tipo de cuenta deseas?")
const arrayCuenta = ["ahorros", "corriente", "dolares"]
let tipoDeCuenta =prompt("Seleccione el tipo de cuenta: \n" + arrayCuenta.map(function(tipo,i){  
    return (i+1) + " - " + tipo

}).join("\n"))

alert("Gracias por seleccionar la cuenta de " + arrayCuenta [tipoDeCuenta-1] )

datosBancarios = {sucursal:"018" , producto:tipoDeCuenta, cuenta:random()}
console.log ("Haz completado la fase Inicial, tu cuenta es: " + datosBancarios.sucursal + "-" + datosBancarios.producto + "-" + datosBancarios.cuenta)

function random() {
    let cuenta = ""
    for (i=0 ; i<5 ; i++) {
    cuenta+= Math.abs(Math.floor((Math.random() * (0 - 9 + 1)) + 0));    
    }
   return cuenta
}

