let confirmacion;
let frase;
let frasesConcatenadas = '';

while (confirmacion !== false) {
    frase = prompt("Ingrese una frase: ");
    if (frase !== null && frase !== "") {
        frasesConcatenadas += frase + " - ";
        confirmacion = confirm("Desea seguir agregando frase?");
    }else{
        alert("No se ingresó ninguna frase")
    }
}
document.write(frasesConcatenadas);
