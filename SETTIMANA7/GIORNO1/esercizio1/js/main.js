class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(altroUtente) {
        if (this.age > altroUtente.age) {
            return `${this.firstName} è più vecchio di ${altroUtente.firstName}`;
        } else if (this.age < altroUtente.age) {
            return `${this.firstName} è più giovane di ${altroUtente.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${altroUtente.firstName}`;
        }
    }
}

// Creazione di due istanze della classe User
const utente1 = new User("Mario", "Rossi", 30, "Milano");
const utente2 = new User("Luigi", "Verdi", 25, "Roma");

// Confronto delle età
const risultatoConfronto = utente1.confrontaEta(utente2);

// Creazione di un paragrafo per mostrare il risultato sulla pagina
const risultatoParagrafo = document.createElement('p');
risultatoParagrafo.textContent = risultatoConfronto;

// Aggiunta del paragrafo al body del documento
document.body.appendChild(risultatoParagrafo);
