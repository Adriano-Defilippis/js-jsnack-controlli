// JSnack #4:
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

//inizializzo un Array di nomi
var nomi, messaggio;

nomi = [
  "luca",
  "nicola",
  "francesco",
  "paolo",
  "enzo",
  "antonio",
  "matteo",
  "pierpaolo",
  "donato",
  "giuseppe"
]


// Input dell'utente
input = prompt("inserisci il tuo nome")

//Ciclo per attraversare l'Array e conforntare i valori
for (var i = 0; i < nomi.length; i++){

  //controllo
  if (nomi[i] == input) {
    messaggio = "È qui la festa!!!!!!";
  }else {
    messaggio = "Non sei stato invitato... :(";
  }
}
alert(messaggio);
