const calificacion = parseInt(prompt("Ingrese una calificacion:"));

if (isNaN(calificacion)) {
    alert("Ingrese una calificacion correcta");
}else{
    switch (calificacion) {
        case 0:
        case 1:
        case 2:
            document.write("Muy deficiente")
            break;
        case 3:
        case 4:
            document.write("Insuficiente")
            break;
        case 5:
        case 6:
            document.write("Suficiente")
            break;
        case 7:
            document.write("Bien")
            break;
        case 8:
        case 9:
            document.write("Notable")
            break;
        case 10:
            document.write("Sobresaliente")
            break;
        default:
            alert("Ingrese una calificacion entre 0 y 10")
            break;
    }
}
