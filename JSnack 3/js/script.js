let validString = true;
let reverseStri;
validS ();
console.log(validString, reverseStri);



function validS (){
  while (validString) {
    const stringa = prompt("Scrivi una parola da rigirare")
    if (isNaN(stringa)) {
      validString = false;
      reverseStri = stringa.split("").reverse().join("")
    }else{
      alert("hai Sbagliato a scrivere")
    }
    console.log(stringa, validString);
  }
}