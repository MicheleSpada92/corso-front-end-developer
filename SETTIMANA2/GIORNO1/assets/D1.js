/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*
  - Number (Numero): Rappresenta i numeri, come 1, 2, 3, ecc.
  - String (Stringa): Rappresenta il testo, come "ciao" o "hello".
  - Boolean (Booleano): Rappresenta i valori di verità, come vero (true) o falso (false).
  - Object (Oggetto): Rappresenta collezioni di dati in un formato chiave-valore., È come un contenitore che può contenere molte cose diverse insieme.
  - Array (Array): Rappresenta una lista ordinata di elementi.
  - Null: Rappresenta l'assenza di valore.
  - Undefined: Rappresenta una variabile che è stata dichiarata ma non ha un valore assegnato.
*/

/*
Numero (Number): È come i numeri che usi per contare le cose, come 1, 2, 3.
Stringa (Stringa): Sono come le parole o le frasi che scrivi, come "ciao" o "hello".
Booleano (Booleano): Sono come le risposte "sì" o "no", o "vero" o "falso".
Oggetto (Oggetto): È come un contenitore che può contenere molte cose diverse insieme.
Array (Array): È come una lista di cose in ordine.
Null: Significa che non c'è niente, è vuoto.
Undefined: È come se qualcosa esistesse, ma non sappiamo cosa sia.
*/

/* ESERCIZIO 2
 Crea una variabile chiamata "name" e assegnale il tuo nome sotto forma di stringa.
*/

let name = "Michele";

/* ESERCIZIO 3
 Scrivi il codice necessario per effettuare un'addizione (una somma) dei numeri 12 e 20.
*/

let risultatoSomma = 12 + 20;
console.log("Il risultato dell'addizione è:", risultatoSomma);

/* ESERCIZIO 4
 Crea una variabile di nome "x" e assegnale il valore 12.
*/

let x = 12;

/* ESERCIZIO 5
 Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
 Verifica l'impossibilità di riassegnare un valore a una variabile dichiarata con il costrutto const.
*/

name = "Cognome"; // Riassegnamento del valore a una variabile "let" già esistente

const numeroCostante = 42;
// numeroCostante = 10; // Tentativo di riassegnare un valore a una variabile "const" genererà un errore

/* ESERCIZIO 6
 Esegui una sottrazione tra il numero 4 e la variabile "x" appena dichiarata (che contiene il numero 12).
*/

let risultatoSottrazione = 4 - x;
console.log("Il risultato della sottrazione è:", risultatoSottrazione);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a "name1" la stringa "john" e a "name2" la stringa "John" (con la J maiuscola).
 Verifica che "name1" sia diversa da "name2" (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Extra: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di "name2").
*/

let name1 = "john";
let name2 = "John";

console.log("name1 è diverso da name2?", name1 !== name2);

// Verifica se le stringhe in lowercase sono uguali
console.log("Le stringhe lowercase sono uguali?", name1.toLowerCase() === name2.toLowerCase());
