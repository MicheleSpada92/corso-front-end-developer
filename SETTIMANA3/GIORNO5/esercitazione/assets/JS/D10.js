/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

var sum = 10 + 20;

console.log(sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

var random = Math.floor(Math.random() * 21);

console.log(random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

var me = {
  name: "Michele",
  surname: "Spada",
  age: "31",
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

delete me.age;
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

me.skills = ["JavaScript", "HTML", "CSS"];

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

me.skills.push("NuovoElemento");

console.log(me);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

me.skills.pop();

console.log(me);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/

function dice() {
 
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

var result = dice();
console.log(result);


/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

function whoIsBigger(num1, num2) {
  // Confrontare i due numeri e restituire il maggiore
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}


var result = whoIsBigger(8, 4);
console.log(result);


/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

function splitMe(inputString) {
  var wordsArray = inputString.split(" ");
  return wordsArray;
}

var result = splitMe("Questo è un test");
console.log(result);

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

function deleteOne(inputString, deleteFirst) {
 
  if (deleteFirst === true) {
    
    return inputString.substring(1);
  } else {
    
    return inputString.slice(0, -1);
  }
}

var result1 = deleteOne("hello", true);
var result2 = deleteOne("world", false);

console.log(result1);  
console.log(result2);  

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

function onlyLetters(inputString) {
  
  var stringWithoutNumbers = inputString.replace(/\d/g, '');
  

  return stringWithoutNumbers;
}

var result = onlyLetters("I have 4 dogs");
console.log(result);

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

function isThisAnEmail(inputString) {
  
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

 
  return emailRegex.test(inputString);
}


var result1 = isThisAnEmail("prova@libero.com");
var result2 = isThisAnEmail("nomail@.com");

console.log(result1);  
console.log(result2);  

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

function whatDayIsIt() {
  
  var currentDate = new Date();

  
  var dayOfWeek = currentDate.getDay();

  
  var daysOfWeek = ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"];

  
  return daysOfWeek[dayOfWeek];
}

var result = whatDayIsIt();
console.log(result);

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

function dice() {
  return Math.floor(Math.random() * 6) + 1;
}


function rollTheDices(numOfRolls) {
  
  var result = {
    sum: 0,
    values: []
  };

  
  for (var i = 0; i < numOfRolls; i++) {
    var diceValue = dice();
    result.sum += diceValue;
    result.values.push(diceValue);
  }

  
  return result;
}


var rollResult = rollTheDices(3);
console.log(rollResult);

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

function howManyDays(startDate) {
  var start = new Date(startDate);
  var today = new Date();
  var timeDifference = today - start;
  var daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  return daysDifference;
}

var startDate = "2023-11-01";
var daysPassed = howManyDays(startDate);
console.log(daysPassed);

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

function isTodayMyBirthday(birthday) {
  
  var today = new Date();

  
  var birthdayDate = new Date(birthday);
  var birthdayDay = birthdayDate.getDate();
  var birthdayMonth = birthdayDate.getMonth();

  
  var todayDay = today.getDate();
  var todayMonth = today.getMonth();

  
  return birthdayDay === todayDay && birthdayMonth === todayMonth;
}


var myBirthday = "1992-11-08"; 
var isBirthday = isTodayMyBirthday(myBirthday);
console.log(isBirthday);

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

// Dichiarare e inizializzare la variabile movies



function deleteProp(obj, propToDelete) {
  if (propToDelete in obj) {
    delete obj[propToDelete];
  }
  return obj;
}

var modifiedMovies = deleteProp(movies[0], 'Poster');
console.log(modifiedMovies);

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/


function newestMovie(movieArray) {
  
  if (movieArray.length === 0) {
    return null; 
  }

  
  var sortedMovies = movieArray.sort(function (a, b) {
    return parseInt(b.Year) - parseInt(a.Year);
  });

  
  return sortedMovies[0];
}


var mostRecentMovie = newestMovie(movies);
console.log(mostRecentMovie);



/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/


function countMovies(movieArray) {
  
  return movieArray.length;
}


var numberOfMovies = countMovies(movies);
console.log(numberOfMovies);


/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

function onlyTheYears(movieArray) {
  
  var yearsArray = movieArray.map(function (movie) {
    return movie.Year;
  });

  return yearsArray;
}


var yearsOfMovies = onlyTheYears(movies);
console.log(yearsOfMovies);

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/

function onlyInLastMillennium(movieArray) {
  
  var lastMillenniumMovies = movieArray.filter(function (movie) {
    var movieYear = parseInt(movie.Year);
    return movieYear >= 1000 && movieYear <= 1999;
  });

  return lastMillenniumMovies;
}


var lastMillenniumMovies = onlyInLastMillennium(movies);
console.log(lastMillenniumMovies);

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

function sumAllTheYears(movieArray) {
  
  var totalYears = movieArray.reduce(function (sum, movie) {
    return sum + parseInt(movie.Year);
  }, 0);

  return totalYears;
}


var totalProductionYears = sumAllTheYears(movies);
console.log(totalProductionYears);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/


function searchByTitle(movieArray, titleSubstring) {
  
  var matchingMovies = movieArray.filter(function (movie) {
    return movie.Title.toLowerCase().includes(titleSubstring.toLowerCase());
  });

  return matchingMovies;
}


var searchTerm = "Lord of the Rings";
var matchingMovies = searchByTitle(movies, searchTerm);
console.log(matchingMovies);


/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/


function searchAndDivide(movieArray, searchSubstring) {
  
  var matchingMovies = movieArray.filter(function (movie) {
    return movie.Title.toLowerCase().includes(searchSubstring.toLowerCase());
  });

  var unmatchingMovies = movieArray.filter(function (movie) {
    return !movie.Title.toLowerCase().includes(searchSubstring.toLowerCase());
  });


  return {
    match: matchingMovies,
    unmatch: unmatchingMovies,
  };
}


var searchTerm = "Lord of the Rings";
var dividedMovies = searchAndDivide(movies, searchTerm);
console.log(dividedMovies);


/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/


function removeIndex(movieArray, indexToRemove) {

  var newArray = movieArray.filter(function (_, index) {
    return index !== indexToRemove;
  });

  return newArray;
}


var indexToRemove = 1; 
var newArrayWithoutIndex = removeIndex(movies, indexToRemove);
console.log(newArrayWithoutIndex);


// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

var newDiv = document.createElement("div");


newDiv.id = "container";


newDiv.textContent = "nuovo elemento con ID 'container'.";


document.body.appendChild(newDiv);

function selectContainerElement() {
  var containerElement = document.getElementById("container");
  return containerElement;
}


var containerElement = selectContainerElement();
console.log(containerElement);

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

function selectAllTableCells() {
  var tdElements = document.querySelectorAll("td");
  return tdElements;
}


var allTableCells = selectAllTableCells();
console.log(allTableCells);

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

function printTextInTableCells() {
  
  var tdElements = document.querySelectorAll("td");

 
  tdElements.forEach(function(td) {
    console.log(td.textContent);
  });
}


printTextInTableCells();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
function addRedBackgroundToLinks() {
  var linkElements = document.querySelectorAll("a");

  linkElements.forEach(function(link) {
      link.style.backgroundColor = "red";
      link.style.padding = "5px";
      link.style.color = "white";
      link.style.textDecoration = "none";
  });
}


window.onload = function() {
  addRedBackgroundToLinks();
};

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

function addElementToList() {
 
  var newListItem = document.createElement('li');

  
  var textNode = document.createTextNode('Nuovo Elemento');
  newListItem.appendChild(textNode);

  
  var myList = document.getElementById('myList');

  a
  myList.appendChild(newListItem);
}


window.onload = function() {
  addRedBackgroundToLinks();
  addElementToList();
};



function addElementToList() {
  
  var newListItem = document.createElement("li");

  
  var textNode = document.createTextNode("Nuovo Elemento");
  newListItem.appendChild(textNode);

  
  var myList = document.getElementById("myList");

  
  myList.appendChild(newListItem);
}


window.onload = function() {
  addElementToList();
};


/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/


function clearList() {
  
  var myList = document.getElementById('myList');

  
  myList.innerHTML = '';
}


window.onload = function() {
  
  addRedBackgroundToLinks();
  addElementToList();

  
  clearList();
};


/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

function addClassToRows() {
  
  var trElements = document.querySelectorAll('tr');

  
  trElements.forEach(function(tr) {
      tr.classList.add('test');
  });
}


window.onload = function() {
  
  addClassToRows();
};

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/


