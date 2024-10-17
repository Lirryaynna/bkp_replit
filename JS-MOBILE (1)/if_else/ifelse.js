const idade = 18;

if (idade >= 18 ) {
  console.log("Maior de idade");
  
}
else if (idade < 18) {
  console.log("Menor de idade");
}
  else{
    console.log('idade inválida')
  }


//CASE SENSITIVE - maiusculas diferem de minusculas

/**
 * PROMPT("DAKDJFAKD")!!
 * escreva um codigo que pergunte qual a cor preferida, SE for vemelho,imprima "vermelho". SE for azul, imprima" azul",
 * SENAO nao conheço essa cor
 */

//const cor= 'verde'
  const cor = prompt('qual a sua cor preferida?');
if (cor === 'vermelho'){
  console.log ('vermelho')
}else if (cor === 'azul') {
    console.log( 'azul')
  
}else {
  console.log('nao conheço essa cor')
}


console.log(cor.length) 