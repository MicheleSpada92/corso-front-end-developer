/* ESERCIZIO 1
   Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
function trovaNumeroMaggiore(numero1, numero2) {
  if (numero1 > numero2) {
    console.log(numero1 + " è il numero più grande.");
  } else if (numero2 > numero1) {
    console.log(numero2 + " è il numero più grande.");
  } else {
    console.log("I numeri sono uguali.");
  }
}

trovaNumeroMaggiore(5, 8); // Esempio di utilizzo

/* ESERCIZIO 2
   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function verificaNumero(numero) {
  if (numero !== 5) {
    console.log("not equal");
  } else {
    console.log("Il numero è uguale a 5.");
  }
}

verificaNumero(7); // Esempio di utilizzo

/* ESERCIZIO 3
   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function verificaDivisibilitaPer5(numero) {
  if (numero % 5 === 0) {
    console.log("Divisibile per 5");
  } else {
    console.log("Non è divisibile per 5");
  }
}

verificaDivisibilitaPer5(10); // Esempio di utilizzo

/* ESERCIZIO 4
   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function verificaNumero8(numero1, numero2) {
  if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
    console.log("Almeno uno dei casi è vero.");
  } else {
    console.log("Nessuno dei casi è vero.");
  }
}

verificaNumero8(3, 5); // Esempio di utilizzo

/* ESERCIZIO 5
   Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
   C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
   Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
const totalShoppingCart = 60;
let importoTotale = 0;

if (totalShoppingCart > 50) {
  importoTotale = totalShoppingCart; // Spedizione gratuita
} else {
  importoTotale = totalShoppingCart + 10; // Aggiungi costo di spedizione
}

console.log("Importo totale da addebitare: $" + importoTotale);

/* ESERCIZIO 6
   Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% di sconto su ogni prodotto.
   Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e calcolando il totale.
*/
const isBlackFriday = true;
let importoTotale2 = 0;

if (totalShoppingCart > 50) {
  importoTotale2 = totalShoppingCart; // Spedizione gratuita
} else {
  importoTotale2 = totalShoppingCart + 10; // Aggiungi costo di spedizione
}

if (isBlackFriday) {
  importoTotale2 *= 0.8; // Applica lo sconto del 20%
}

console.log("Importo totale da addebitare (con sconto Black Friday): $" + importoTotale2);

/* ESERCIZIO 7
   Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
   Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
   Alla fine mostra il risultato in console.
*/
const num1 = 25;
const num2 = 10;
const num3 = 50;

if (num1 >= num2 && num1 >= num3) {
  if (num2 >= num3) {
    console.log(num1, num2, num3);
  } else {
    console.log(num1, num3, num2);
  }
} else if (num2 >= num1 && num2 >= num3) {
  if (num1 >= num3) {
    console.log(num2, num1, num3);
  } else {
    console.log(num2, num3, num1);
  }
} else {
  if (num1 >= num2) {
    console.log(num3, num1, num2);
  } else {
    console.log(num3, num2, num1);
  }
}

/* ESERCIZIO 8
   Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function isNumero(valore) {
  if (typeof valore === 'number') {
    console.log("È un numero.");
  } else {
    console.log("Non è un numero.");
  }
}

isNumero("stringa"); // Esempio di utilizzo

/* ESERCIZIO 9
   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function isPariOdispari(numero) {
  if (numero % 2 === 0) {
    console.log("Il numero è pari.");
  } else {
    console.log("Il numero è dispari.");
  }
}

isPariOdispari(7); // Esempio di utilizzo

/* ESERCIZIO 10
   Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
   let val = 7
   if (val < 10) {
       console.log("Meno di 10");
     } else if (val < 5) {
       console.log("Meno di 5");
     } else {
       console.log("Uguale a 10 o maggiore");
   }
*/
let val = 7;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
   Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
   Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop();
console.log(me);

/* ESERCIZIO 14
   Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const numeri = [];
for (let i = 1; i <= 10; i++) {
  numeri.push(i);
}
console.log(numeri);

/* ESERCIZIO 15
   Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
numeri[numeri.length - 1] = 100;
console.log(numeri);
