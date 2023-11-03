let numero = prompt("Ingrese un numero no mayor a 50:");
let lineasPiramide = "1";
let piramide = "1";
let contador = 0;
if (numero > 50) {
    alert("El numero ingresado es mayor a 50");
}else{

    do {
        document.write(`${piramide} <br>`)
        lineasPiramide++
        piramide += lineasPiramide;
        contador++
    } while (contador < numero);
}
