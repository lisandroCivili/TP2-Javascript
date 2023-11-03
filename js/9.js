let contador = 1;
while (contador < 501) {
  if (contador % 4 === 0) {
    document.write(`${contador} es multiplo de 4 <br>`);
  } else if (contador % 9 === 0) {
    document.write(`${contador} es multiplo de 9 <br>`);
  }else{
    document.write(`${contador}<br>`);
  }

  if (contador%5===0) {
    document.write(`------------------------<br>`);
  }

  contador++;
}
