const edad = parseInt(prompt("Ingrese su edad:"));
if (isNaN(edad)) {
    alert("Ingrese una edad correcta");
}else if(edad >= 18){
    document.write("Puede conducir");
}else{
    document.write("No puede conducir");
}