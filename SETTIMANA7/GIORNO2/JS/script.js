// script.js

// Funzione per salvare il nome in localStorage
function salvaNome() {
    var nomeInput = document.getElementById('nameInput').value;
    localStorage.setItem('utenteNome', nomeInput);
    mostraNomeSalvato();
  }
  
  // Funzione per rimuovere il nome salvato da localStorage
  function rimuoviNome() {
    localStorage.removeItem('utenteNome');
    mostraNomeSalvato();
  }
  
  // Funzione per mostrare il nome salvato sopra l'input field
  function mostraNomeSalvato() {
    var nomeSalvato = localStorage.getItem('utenteNome');
    var nomeSalvatoDiv = document.getElementById('nomeSalvato');
    if (nomeSalvato) {
      nomeSalvatoDiv.textContent = 'Nome Salvato: ' + nomeSalvato;
    } else {
      nomeSalvatoDiv.textContent = '';
    }
  }
  
  // Funzione per gestire il contatore di tempo
  function aggiornaContatore() {
    var contatoreDiv = document.getElementById('contatore');
    var tempoTrascorso = sessionStorage.getItem('tempoTrascorso') || 0;
    setInterval(function() {
      tempoTrascorso++;
      sessionStorage.setItem('tempoTrascorso', tempoTrascorso);
      contatoreDiv.textContent = 'Tempo Trascorso: ' + tempoTrascorso + ' secondi';
    }, 1000);
  }
  
  // Chiamata alla funzione per iniziare il contatore
  aggiornaContatore();
  
  // Chiamata alla funzione per mostrare il nome salvato inizialmente
  mostraNomeSalvato();
  