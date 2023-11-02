let confirmacion;
let frase;
let frasesConcatenadas = '';

while (confirmacion !== false) {
    frase = prompt("Ingrese una frase: ");
    confirmacion = confirm("Desea seguir agregando frase?");
    if (frase !== null && frase !== "") {
        frasesConcatenadas += frase + " - ";
    }
}
document.write(frasesConcatenadas);
