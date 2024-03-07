const numeri = [1, 2, 3, 4];
const lettere = ["a", "b", "c", "d"];

arrayLN(numeri, lettere)

console.log(numeriLettere);


function arrayLN(a, b) {
  const numeriLettere = []
  a.forEach((element, index) => {
    numeriLettere.push(element, b[index])
  })
  console.log(numeriLettere);
}