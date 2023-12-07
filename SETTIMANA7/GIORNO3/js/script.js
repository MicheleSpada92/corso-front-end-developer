// Funzione per ottenere i dati dalla chiamata API
async function fetchBooks() {
  try {
      const response = await fetch('https://striveschool-api.herokuapp.com/books');
      if (!response.ok) {
          throw new Error('Errore nella risposta API');
      }
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Errore nella richiesta API:', error);
      throw error;
  }
}

// Funzione per generare le card dei libri
function renderBooks(books) {
  const bookList = document.getElementById('bookList');

  books.forEach(book => {
      const card = document.createElement('div');
      card.classList.add('col');

      const cardContent = `
          <div class="card">
              <img src="${book.img}" class="card-img-top" alt="${book.title}">
              <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">Prezzo: ${book.price}</p>
                  <button class="btn btn-danger" onclick="removeCard(this)">Scarta</button>
                  <button class="btn btn-success" onclick="addToCart('${book.title}', ${book.price})">Compra ora</button>
              </div>
          </div>
      `;

      card.innerHTML = cardContent;
      bookList.appendChild(card);
  });
}

// Funzione per aggiornare il carrello nel localStorage
function updateCartInLocalStorage() {
  const cartList = document.getElementById('cartList');
  const cartItems = cartList.getElementsByTagName('li');
  const cartData = [];

  // Estrae le informazioni del carrello e le salva nell'array cartData
  for (const item of cartItems) {
      const bookData = JSON.parse(item.dataset.bookData);
      cartData.push(bookData);
  }

  // Salva l'array cartData nel localStorage
  localStorage.setItem('cart', JSON.stringify(cartData));
}

// Funzione per aggiungere un libro al carrello
function addToCart(title, price) {
  try {
      const cartList = document.getElementById('cartList');
      if (!cartList) {
          throw new Error('Elemento #cartList non trovato');
      }

      const cartItem = document.createElement('li');
      cartItem.classList.add('list-group-item');

      // Memorizza i dati del libro come oggetto JSON
      const bookData = { title, price };
      cartItem.dataset.bookData = JSON.stringify(bookData);

      const removeButton = document.createElement('button');
      removeButton.classList.add('btn', 'btn-danger', 'btn-sm');
      removeButton.textContent = 'Rimuovi';
      removeButton.onclick = function () {
          removeFromCart(this);
      };

      cartItem.innerHTML = `${title} - Prezzo: ${price} `;
      cartItem.appendChild(removeButton);
      cartList.appendChild(cartItem);

      // Visualizza le informazioni nella console per debug
      console.log('Libro aggiunto al carrello:', bookData);

      // Salvataggio nel localStorage
      updateCartInLocalStorage();

      // Verifica se la sezione del carrello è già visibile
      if (cartList.children.length === 1) {
          showCartSection();
      }
  } catch (error) {
      console.error('Errore durante l\'aggiunta al carrello:', error);
  }
}

// Funzione per rimuovere un libro dal carrello
function removeFromCart(button) {
  const cartItem = button.closest('li');
  cartItem.remove();

  // Salvataggio nel localStorage
  updateCartInLocalStorage();
}

// Funzione per visualizzare la sezione del carrello
function showCartSection() {
  const cartContent = document.getElementById('cartContent');
  if (cartContent) {
      cartContent.classList.remove('d-none');
  }
}

// Funzione per inizializzare la pagina
async function initializePage() {
  try {
      const books = await fetchBooks();
      renderBooks(books);
  } catch (error) {
      console.error('Errore durante l\'inizializzazione della pagina:', error);
  }
}

// Chiamata alla funzione per inizializzare la pagina
initializePage();

// Funzione per visualizzare/nascondere la sezione del carrello
function toggleCart() {
  const cartContent = document.getElementById('cartContent');
  if (cartContent) {
      cartContent.classList.toggle('d-none');
  }
}