class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    stessoProprietario(altroPet) {
        return this.ownerName === altroPet.ownerName;
    }
}

const petList = [];

function aggiungiPet() {
    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const nuovoPet = new Pet(petName, ownerName, species, breed);
    petList.push(nuovoPet);

    visualizzaPet();
}

function visualizzaPet() {
    const listaElemento = document.getElementById('petList');
    listaElemento.innerHTML = '';

    petList.forEach((pet) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nome: ${pet.petName}, Proprietario: ${pet.ownerName}, Specie: ${pet.species}, Razza: ${pet.breed}`;
        listaElemento.appendChild(listItem);
    });
}
