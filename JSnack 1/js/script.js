const zucchine = 
[
  {
    zucchina: 1,
    peso: 20,
    lunghezza: 30
  },
  {
    zucchina: 2,
    peso: 21,
    lunghezza: 31
  },
  {
    zucchina: 3,
    peso: 22,
    lunghezza: 32
  },
  {
    zucchina: 4,
    peso: 23,
    lunghezza: 33
  },
  {
    zucchina: 5,
    peso: 24,
    lunghezza: 34
  },
  {
    zucchina: 6,
    peso: 25,
    lunghezza: 35
  },
  {
    zucchina: 7,
    peso: 26,
    lunghezza: 36
  },
  {
    zucchina: 8,
    peso: 27,
    lunghezza: 37
  },
  {
    zucchina: 9,
    peso: 28,
    lunghezza: 38
  },
  {
    zucchina: 10,
    peso: 29,
    lunghezza: 39
  }
]

let somma = 0;

zucchine.forEach((zucchina) => somma += zucchina.peso)

console.log(somma);