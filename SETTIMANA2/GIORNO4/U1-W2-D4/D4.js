/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    // Calcola l'area del rettangolo moltiplicando le lunghezze dei lati
    const result = l1 * l2;

    // Mostra il risultato nella console
    console.log("Area del rettangolo con l1 = " + l1 + " e l2 = " + l2 + ": " + result);

    // Mostra il risultato sulla pagina
    const exercise1Result = document.getElementById('exercise1Result');
    exercise1Result.innerHTML = `Area del rettangolo con l1 = ${l1} e l2 = ${l2}: ${area}`;
    exercise1Result.style.color = 'green';

    return result;
}


  
  // Verifica dell'ESERCIZIO 1
  const result1 = area(5, 10);
  const result2 = area(8, 7);
  
  /* ESERCIZIO 2
   Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
   La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
   la loro somma moltiplicata per tre.
  */
  
   function crazySum(num1, num2) {
    if (num1 === num2) {
      // Se i due numeri sono uguali, restituisci la loro somma moltiplicata per tre
      return (num1 + num2) * 3;
    } else {
      // Altrimenti, restituisci la somma dei due numeri
      return num1 + num2;
    }
  }
  
  // Verifica dell'ESERCIZIO 2
  console.log("\nESERCIZIO 2 - Calcolo della crazySum:");
  console.log("crazySum(3, 3):", crazySum(3, 3));
  console.log("crazySum(2, 5):", crazySum(2, 5));
  
  /* ESERCIZIO 3
   Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
   Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
  */
  
  function crazyDiff(num) {
    // Calcola la differenza assoluta tra il numero e 19
    const diff = Math.abs(num - 19);
    if (num > 19) {
      // Se il numero è maggiore di 19, restituisci la differenza moltiplicata per tre
      return diff * 3;
    } else {
      // Altrimenti, restituisci la differenza stessa
      return diff;
    }
  }
  
  // Verifica dell'ESERCIZIO 3
  console.log("\nESERCIZIO 3 - Calcolo della crazyDiff:");
  console.log("crazyDiff(25):", crazyDiff(25));
  console.log("crazyDiff(15):", crazyDiff(15));
  
  /* ESERCIZIO 4
   Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
   se n è uguale a 400.
  */
  
  function boundary(n) {
    // Verifica se il numero è compreso tra 20 e 100 (incluso) o se è uguale a 400
    return (n >= 20 && n <= 100) || n === 400;
  }
  
  // Verifica dell'ESERCIZIO 4
  console.log("\nESERCIZIO 4 - Verifica del boundary:");
  console.log("boundary(50):", boundary(50));
  console.log("boundary(10):", boundary(10));
  console.log("boundary(400):", boundary(400));
  
  /* ESERCIZIO 5
   Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
   La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
   ritornare la stringa originale senza alterarla.
  */
  
  function epify(str) {
    if (str.startsWith("EPICODE")) {
      // Se la stringa inizia già con "EPICODE", restituisci la stringa originale
      return str;
    } else {
      // Altrimenti, aggiungi "EPICODE" all'inizio della stringa e restituisci la nuova stringa
      return "EPICODE " + str;
    }
  }
  
  // Verifica dell'ESERCIZIO 5
  console.log("\nESERCIZIO 5 - Aggiunta di 'EPICODE' alla stringa:");
  console.log("epify('Hello'):", epify('Hello'));
  console.log("epify('EPICODE JavaScript'):", epify('EPICODE JavaScript'));
  
 /* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
    // Verifica se il numero è positivo e se è un multiplo di 3 o di 7
    return num > 0 && (num % 3 === 0 || num % 7 === 0);
  }
  
  // Verifica dell'ESERCIZIO 6
  console.log("ESERCIZIO 6 - Verifica del check3and7:");
  console.log("check3and7(9):", check3and7(9));
  console.log("check3and7(14):", check3and7(14));
  
  /* ESERCIZIO 7
   Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
  */
  
  function reverseString(str) {
    // Divide la stringa in singoli caratteri, inverte l'ordine e li riunisce in una nuova stringa
    return str.split("").reverse().join("");
  }
  
  // Verifica dell'ESERCIZIO 7
  console.log("\nESERCIZIO 7 - Inversione della stringa:");
  console.log("reverseString('EPICODE'):", reverseString('EPICODE'));
  console.log("reverseString('JavaScript'):", reverseString('JavaScript'));
  
  /* ESERCIZIO 8
   Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
   La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
  */
  
  function upperFirst(str) {
    // Divide la stringa in parole, rende maiuscola la prima lettera di ciascuna parola e le riunisce in una nuova stringa
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return "";
      }
    });
    return capitalizedWords.join(" ");
  }
  
  // Verifica dell'ESERCIZIO 8
  console.log("\nESERCIZIO 8 - Rendimento maiuscola della prima lettera di ogni parola:");
  console.log("upperFirst('hello world'):", upperFirst('hello world'));
  console.log("upperFirst('javascript is fun'):", upperFirst('javascript is fun'));
  
  // Continua con i console.log per gli altri esercizi...
  
  /* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(str) {
    // Verifica se la stringa ha almeno due caratteri
    if (str.length >= 2) {
      // Rimuovi il primo e l'ultimo carattere dalla stringa
      return str.slice(1, -1);
    } else {
      // Se la stringa ha meno di due caratteri, restituisci una stringa vuota
      return "";
    }
  }
  
  // Verifica dell'ESERCIZIO 9
  console.log("ESERCIZIO 9 - Rimozione del primo e dell'ultimo carattere:");
  console.log("cutString('EPICODE'):", cutString('EPICODE'));
  console.log("cutString('A'):", cutString('A'));
  
  /* ESERCIZIO 10
   Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
  */
  
  function giveMeRandom(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
      // Genera un numero casuale tra 0 e 10 e aggiungilo all'array
      randomNumbers.push(Math.floor(Math.random() * 11));
    }
    return randomNumbers;
  }
  
  // Verifica dell'ESERCIZIO 10
  console.log("\nESERCIZIO 10 - Generazione di numeri casuali:");
  console.log("giveMeRandom(5):", giveMeRandom(5));
  console.log("giveMeRandom(3):", giveMeRandom(3));
  