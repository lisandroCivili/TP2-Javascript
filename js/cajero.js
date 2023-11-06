let opciones = parseInt(prompt("Ingrese una opcion: 1-Consulta de saldo 2-Ingrese dinero 3-Extraiga dinero"));
let saldo = 0;

switch (opciones) {
    case 1:
        alert(`Su saldo es de ${saldo}`);
        break;
    case 2:
        let sumaSaldo = parseInt(prompt("Cuando dinero desea ingresar?:"));
        saldo += sumaSaldo;
        alert(`Su nuevo saldo es de ${saldo}`);
        break;
    case 3:
        let restaSaldo = parseInt(prompt("Cuando dinero desea extraer?:"));
        saldo -= restaSaldo;
        alert(`Su nuevo saldo es de ${saldo}`);
        break;

    default:
        break;
}