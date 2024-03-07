const arrayNumeri = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const a = 2;
const b = 8;

compresi(arrayNumeri, a, b)

function compresi(array, a, b){
  const arrayCompresi = []
  array.forEach((numero) => {
    if (numero > a && numero < b) {
      arrayCompresi.push(numero)
    }

  })
  console.log(arrayCompresi);
}