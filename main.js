// Condicionales

// Condicion => true / false

// const condicion = true

// if (condicion) {
//     // bloque de codigo que se ejecuta si mi condicion se cumple
//     console.log("Entre en el if, mi condicion se cumplio")
// } else {
//     console.log("Mi condicion no se cumplio")
// }

// const numero1 = 10
// const numero2 = "10"
// const numero3 = 20

// ==, ===, >, <, >=, <=, !, !=, !==

// console.log(numero1 == numero2) // true
// console.log(numero1 === numero2) // false
// console.log(numero1 > numero2) // false
// console.log(numero1 < numero3) // true
// console.log(numero1 >= numero3) // false

// string, number, null, undefined, NaN, boolean
// truthy, falsy

// const nombre = "Pilar" // truthy
// const vacio = "" // falsy

// if (vacio) {
//     console.log("Entre en el if")
// } else {
//     console.log("Entre en el else")
// }

// const sumar = (a, b) => {
//     return a + b
// }

// const resultado = sumar(-5, 5)

// const numero1 = 10 // truthy
// const numero2 = 0 // falsy
// const numero3 = -5 // truthy

// if (numero2) {
//     console.log("Entre en el if")
// } else {
//     console.log("Entre en el else")
// }

// const num1 = Number(prompt("Ingresa un numero"))
// const num2 = Number(prompt("Ingresa un numero"))

// if (sumar(num1, num2)) {
//     console.log("Tu suma fue negativa o positiva")
// } else {
//     console.log("Tu suma dio 0")
// }

// const noDefinido = undefined // falsy

// if (noDefinido) {
//     console.log("Entre en el if")
// } else {
//     console.log("Entre en el else")
// }

// const nulo = null // falsy

// if (nulo) {
//     console.log("Entre en el if")
// } else {
//     console.log("Entre en el else")
// }

// console.log(!undefined)
// console.log(!null)
// console.log(!"")
// console.log(!0)

// const num1 = prompt("Ingrese un numero")

// if (isNaN(num1)) {
//     console.log("Entre en el if")
// }

const condicion1 = true
// const condicion2 = false

// if (condicion1) {
//     if (condicion2) {
//         console.log("HOLAAA")
//     } else {
//         console.log("CHAUUU")
//     }
// }

// let nombre = "Pilar"
// console.log(nombre)

// nombre = "Sofia"
// console.log(nombre)

// const nombre2 = "Pilar"
// console.log(nombre2)

// nombre2 = "Sofia"
// console.log(nombre2)

// let mensaje = ""

// if (condicion1) {
//     mensaje = "Me cumpli"
// }

// console.log(mensaje)

// switch

// const diaDeLaSemana = Number(prompt("Ingresa un numero del 1 al 7"))

// switch (diaDeLaSemana) {
//     case 1:
//         console.log("Es lunes")
//         break
//     case 2:
//         console.log("Es martes")
//         break
//     case 3:
//         console.log("Es miercoles")
//         break
//     case 4:
//         console.log("Es jueves")
//         break
//     case 5:
//         console.log("Es viernes")
//         break
//     case 6:
//         console.log("Es sabado")
//         break
//     case 7:
//         console.log("Es domingo")
//         break
//     default:
//         console.log("Sos pelotudo o que onda? Te dije que del 1 al 7")
//         break
// }

// && ||

// && => la unica forma de que mi condicion se cumpla es que TODOS mis terminos den true

// const num1 = 10
// const num2 = 20
// const condicion = false

// if (num2 > num1 && condicion) {
//     console.log("Me cumpli")
// } else {
//     console.log("No me cumpli")
// }

// || => la unica forma de que mi condicion NO se cumpla es que ninguino de mis terminos sean true
//    false     ||   false
// if (num2 < num1 || condicion) {
//     console.log("Me cumpli")
// } else {
//     console.log("No me cumpli")
// }

// const edad = 21
// const sabeManejar = false

// Escribir un programa que evalue si la persona es apta para sacar la licencia de conducir.
// if (edad >= 18 && sabeManejar) {
//     console.log("Toma tu licencia")
// } else {
//     console.log("Todavia no podes manejar")
// }

// const sacarLicencia = (edad, sabeConducir) => {
//     if (edad >= 18 && sabeConducir) {
//         return "Toma tu licencia"
//     } else {
//         return "Todavia no podes manejar"
//     }
// }

// Funciones nativas

const nombre = "pilar figueroa"

// .length => devolver la cantidad de caracteres que tiene un string
// console.log(nombre.length)

// toUpperCase => devuelve el mismo string con el cual se ejecuta pero todo en mayuscula
// console.log(nombre.toUpperCase())

// toLowerCase => devuelve el mismo string pero en minuscula
// console.log(nombre.toLowerCase())

// slice() => cortar el string a partir de la posicion del caracter que le indiquemos
const apellido = nombre.slice(6)
// console.log(apellido)
// desde, hasta
const primeraLetra = nombre.slice(0, 1)
const restoDelNombre = nombre.slice(1)

// console.log(primeraLetra)
const primeraLetraMayuscula = primeraLetra.toUpperCase()

// console.log(primeraLetraMayuscula + restoDelNombre)
// console.log(`${primeraLetraMayuscula}${restoDelNombre}`)

// replace => el primer argumento es aquello que quiero reemplazar, y el segundo es por lo que va a ser reemplazado
// const resultadoFinal = nombre.replace("p", primeraLetraMayuscula)
// console.log(resultadoFinal)

// const espaciarCaracteres = (str) => {
//     return str.split("").join(" ")
// }

// console.log(espaciarCaracteres('javascript')) // 'j a v a s c r i p t'

// Operador ternario => condicional
const num1 = 10
const num2 = 20

// condicion ? pasa esto : pasa esto otro
// num1 > num2 ? console.log("Entre en el if") : null

/*
esFraccionMayorAUno(fraccion)
Crear una función esFraccionMayorAUno que tome como argumento un string fraccion (en el formato 'numerador/denominador') y devuelva true si dicha fracción es mayor a 1 o false de lo contrario
*/

// const esFraccionMayorAUno = (fraccion) => {
//     const numerador = Number(fraccion.slice(0,1))
//     const denominador = Number(fraccion.slice(2))
//     const resultado = numerador / denominador
//     return resultado > 1 ? true : false
// }

// const esFraccionMayorAUno2 = (fraccion) => {
//     const numeros = fraccion.split("/")
//     const resultado = numeros[0] / numeros[1]
//     return resultado > 1 ? true : false
// }

// console.log(esFraccionMayorAUno2('1/2')) // false
// console.log(esFraccionMayorAUno2('2/2')) // false
// console.log(esFraccionMayorAUno2('4/2')) // true
// console.log(esFraccionMayorAUno2('4/2')) // true

// parametros
const sumar = (perro, gato) => {
    return perro + gato
}

// argumento
sumar(5, 10)