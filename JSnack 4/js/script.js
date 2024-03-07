const numeri = [1, 2, 3, 4];
const lettere = ["a", "b", "c", "d"];
let numeriLettere;

arrayLN(numeriLettere)

console.log(numeriLettere);


function arrayLN(nL) {
  numeriLettere = numeri.map((element, index) => {
    return [element, lettere[index]]

  })
}