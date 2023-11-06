// Esercizio 1
function trovaNumeroMaggiore(numero1, numero2) {
  let domanda1 = "Scrivi un algoritmo per trovare il più grande tra due numeri interi.";
  let risposta1;
  if (numero1 > numero2) {
    risposta1 = numero1 + " è il numero più grande.";
  } else if (numero2 > numero1) {
    risposta1 = numero2 + " è il numero più grande.";
  } else {
    risposta1 = "I numeri sono uguali.";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda1").textContent = domanda1;
  document.getElementById("risposta1").textContent = risposta1;

  // Mostra la risposta anche nella console
  console.log(risposta1);
}

// Esegui la funzione con esempio di utilizzo
trovaNumeroMaggiore(10, 8);

/* ESERCIZIO 2
   Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
function verificaNumero(numero) {
  let domanda2 = "Scrivi un algoritmo che mostri 'not equal' in console se un numero intero fornito è diverso da 5.";
  let risposta2;
  if (numero !== 5) {
    risposta2 = "not equal";
  } else {
    risposta2 = "Il numero è uguale a 5.";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda2").textContent = domanda2;
  document.getElementById("risposta2").textContent = risposta2;

  // Mostra la risposta anche nella console
  console.log(risposta2);
}

// Esegui la funzione con esempio di utilizzo
verificaNumero(7);

/* ESERCIZIO 3
   Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function verificaDivisibilitaPer5(numero) {
  let domanda3 = "Scrivi un algoritmo che mostri 'divisibile per 5' in console se un numero fornito è perfettamente divisibile per 5.";
  let risposta3;
  if (numero % 5 === 0) {
    risposta3 = "Divisibile per 5";
  } else {
    risposta3 = "Non è divisibile per 5";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda3").textContent = domanda3;
  document.getElementById("risposta3").textContent = risposta3;

  // Mostra la risposta anche nella console
  console.log(risposta3);
}

// Esegui la funzione con esempio di utilizzo
verificaDivisibilitaPer5(10);

/* ESERCIZIO 4
   Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
function verificaNumero8(numero1, numero2) {
  let domanda4 = "Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.";
  let risposta4;
  if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8) {
    risposta4 = "Almeno uno dei casi è vero.";
  } else {
    risposta4 = "Nessuno dei casi è vero.";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda4").textContent = domanda4;
  document.getElementById("risposta4").textContent = risposta4;

  // Mostra la risposta anche nella console
  console.log(risposta4);
}

// Esegui la funzione con esempio di utilizzo
verificaNumero8(3, 5);

/* ESERCIZIO 8
   Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
function isNumero(valore) {
  let domanda8 = "Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca 'typeof').";
  let risposta8;
  if (typeof valore === 'number') {
    risposta8 = "È un numero.";
  } else {
    risposta8 = "Non è un numero.";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda8").textContent = domanda8;
  document.getElementById("risposta8").textContent = risposta8;

  // Mostra la risposta anche nella console
  console.log(risposta8);
}

// Esegui la funzione con esempio di utilizzo
isNumero("stringa");

/* ESERCIZIO 9
   Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
function isPariOdispari(numero) {
  let domanda9 = "Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca).";
  let risposta9;
  if (numero % 2 === 0) {
    risposta9 = "Il numero è pari.";
  } else {
    risposta9 = "Il numero è dispari.";
  }

  // Inserisci la domanda e la risposta nella pagina
  document.getElementById("domanda9").textContent = domanda9;
  document.getElementById("risposta9").textContent = risposta9;

  // Mostra la risposta anche nella console
  console.log(risposta9);
}

// Esegui la funzione con esempio di utilizzo
isPariOdispari(7);

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
let domanda10 = "Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.";
let risposta10;
if (val < 5) {
  risposta10 = "Meno di 5";
} else if (val < 10) {
  risposta10 = "Meno di 10";
} else {
  risposta10 = "Uguale a 10 o maggiore";
}

// Inserisci la domanda e la risposta nella pagina
document.getElementById("domanda10").textContent = domanda10;
document.getElementById("risposta10").textContent = risposta10;

// Mostra la risposta anche nella console
console.log(risposta10);

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
