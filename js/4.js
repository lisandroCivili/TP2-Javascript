let numero;
let confirmacion;
let numerosSumados = 0;
do {
    numero = parseInt(prompt("Ingrese un numero: "))
    if (isNaN(numero)) {
        alert("Ingrese un numero valido.")
        confirmacion = confirm("¿Desea seguir agregando numeros?")
    }else if(numero !== null){
        numerosSumados += numero;
    }
} while (confirmacion !== false);
document.write(`El resultado de la suma de los numero ingresados es de: ${numerosSumados}`)  
