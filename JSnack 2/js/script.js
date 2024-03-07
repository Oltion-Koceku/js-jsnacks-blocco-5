const zucchine = 
[
  {
    zucchina: 1,
    peso: 20,
    lunghezza: 12
  },
  {
    zucchina: 2,
    peso: 21,
    lunghezza: 15
  },
  {
    zucchina: 3,
    peso: 22,
    lunghezza: 9
  },
  {
    zucchina: 4,
    peso: 23,
    lunghezza: 20
  },
  {
    zucchina: 5,
    peso: 24,
    lunghezza: 24
  },
  {
    zucchina: 6,
    peso: 25,
    lunghezza: 35
  },
  {
    zucchina: 7,
    peso: 26,
    lunghezza: 10
  },
  {
    zucchina: 8,
    peso: 27,
    lunghezza: 14
  },
  {
    zucchina: 9,
    peso: 28,
    lunghezza: 16
  },
  {
    zucchina: 10,
    peso: 29,
    lunghezza: 11
  }
]

let sommaInferiore = 0;
let sommaMaggiore = 0;
zucchine.map((zucchina) =>{
  if(zucchina.lunghezza >= 15){
    sommaInferiore += zucchina.peso;
  }
})

zucchine.map((zucchina) => {
  if(zucchina.lunghezza < 15){
    sommaMaggiore += zucchina.peso;
  }
})
console.log(sommaInferiore, sommaMaggiore);