// Creo un Array vuote;
// Ciedo all'utente per sei volte un input
// Se l'input è dispari lo inserisco nell'Array

var myArray, input;

myArray = [];

//Ciclo for per chiedere un input all'utente 6 volte ed ogni volta lo aggiunge a myArray
for (var i = 0; i < 6; i++) {
  input = parseInt(prompt('Inserisci un valore'));

  // Controllo: solo se il numero è dispari viene "pushato" nel myArray
  if(input % 2 !== 0){
    myArray.push(input);
  }
}

//Restituzione dell'Array dopo il ciclo di Input
console.log(myArray);
