// Creo un Array vuote;
// Ciedo all'utente per sei volte un input
// Se l'input è dispari lo inserisco nell'Array

var myArray, input, controllo;

myArray = [];


var i = 0;
// Ciclo per fare inserire all'utente un massimo di 6 numeri
while ( i < 6) {

  //input forzato a numero
  input = parseInt(prompt('Inserisci un valore'));

  // Variabile di controllo
  controllo = true;

  // Controllo del tipo di input
  if (isNaN(input) && controllo == true) {
    alert('non hai inserito un valore numerico');
    // input = parseInt(prompt('Inserisci un valore'));
    controllo = false;

    // Questa variabile mi garantisce di iterare il coclo fino a quando controllo diventa = true
    continue;
  }
  // Controllo: solo se il numero è dispari viene "pushato" nel myArray
  if(input % 2 !== 0){
    myArray.push(input);
  }
  i++;
}
//Restituzione dell'Array dopo il ciclo di Input
console.log(myArray);
