let numero = prompt("Ingrese un numero no mayor a 50:");

if (numero > 50) {
  alert("El numero ingresado es mayor a 50");
} else {
  do {
    for (let i = numero; i > 0; i--) {
      document.write(`${numero}`);
    }
    document.write("<br>");
    numero--;
  } while (numero > 0);
}
