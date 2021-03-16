/*
Un alert espone 5 numeri casuali. (una volta cliccato ok parte il timer) Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire un prompt alla volta i numeri che ha visto precedentemente.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono
stati individuati.
*/
//--------------------- LE FUNZIONI-----------------------------
// restituisce un numero random tra due estremi compresi
function random(min, max){
  var numero = Math.floor(Math.random() * (max - min + 1)) + min;
  return numero;
}
/*
restituisce "true" se l'elemento è presente nell'array
(si può fare con includes al posto di usare questa funzione)
*/
function inArray(array, elemento) {
  var i = 0;
  while(i < array.length){
    if(array[i] == elemento){
      return true;
    }
    i++;
  }
  return false;
}
//--------------------fine DELLE FUNZIONI------------------------
// GENERO L'ARRAY CONTENENTE I NUMERI DA MEMORIZZARE (univoci)
var arrayNumeriRandom = [];
while (arrayNumeriRandom.length < 5) {
  var numeroRandom = random(1, 100);
  if (inArray(arrayNumeriRandom, numeroRandom) == false) {
    arrayNumeriRandom.push(numeroRandom);
  }
}
console.log(arrayNumeriRandom);
alert("I numeri da memorizzare, sono: " + arrayNumeriRandom);
