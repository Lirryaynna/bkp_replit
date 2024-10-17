function calculadora2(n1, n2) {

  const res = n1 + n2
  console.log('total ' + res)
}
calculadora2(12, 10)




function calculadora(n1, n2) {
  if (typeof n1 === "number" && typeof n2 === "number") {
    const res = n1 + n2
    console.log('total ' + res)
  } else {
    console.log('erro')
  }
}
calculadora(1, 2)
calculadora('uva', 2)