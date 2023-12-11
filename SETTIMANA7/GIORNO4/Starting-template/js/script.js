$(document).ready(function () {
    // Chiave API Pexels
    const apiKey = 'LMuFKPu8oBjbfL7YzyAYg1hufmOUSnvykyvsgWnu3XCuO8Ey03SVD9k1';

    // URL dell'API Pexels
    const apiUrl = 'https://api.pexels.com/v1/search';

    // Selettore del pulsante "Load Images"
    const loadImagesBtn = $('#loadImagesBtn');
    // Selettore del pulsante "Load Secondary Images"
    const loadSecondaryImagesBtn = $('#loadSecondaryImagesBtn');
    // Selettore del campo di ricerca
    const searchInput = $('#searchInput');
    // Selettore del pulsante "Search Images"
    const searchImagesBtn = $('#searchImagesBtn');

    // Funzione per caricare le immagini al clic del pulsante
    function loadImages(query) {
        $.ajax({
            url: `${apiUrl}?query=${query}`,
            type: 'GET',
            headers: {
                'Authorization': apiKey,
            },
            success: function (data) {
                // Gestisci la risposta dell'API
                displayImages(data.photos);
            },
            error: function (error) {
                console.error('Errore durante la richiesta API:', error);
            }
        });
    }

    // Funzione per visualizzare le immagini sulla pagina
    function displayImages(photos) {
        // Trova il contenitore delle immagini
        const imagesContainer = $('#imagesContainer');

        // Svuota il contenitore delle immagini
        imagesContainer.empty();

        // Itera attraverso le foto e aggiungi ciascuna al contenitore all'interno di una card
        photos.forEach(function (photo) {
            const imageUrl = photo.src.medium;
            const imageElement = `
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm">
                        <img src="${imageUrl}" class="card-img-top" alt="Pexels Image">
                        <div class="card-body">
                            <h5 class="card-title">Lorem Ipsum</h5>
                            <p class="card-text">
                                This is a wider card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit
                                longer.
                            </p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary">
                                        View
                                    </button>
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-hide">
                                        Hide
                                    </button>
                                </div>
                                <small class="text-muted">${photo.id}</small>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            imagesContainer.append(imageElement);
        });
    }

    // Gestisci il clic sul pulsante "Load Images"
    loadImagesBtn.click(function (event) {
        event.preventDefault(); // Evita il comportamento predefinito del modulo
        loadImages('cat'); // Imposta la query desiderata (es. 'cat')
    });

    // Gestisci il clic sul pulsante "Load Secondary Images"
    loadSecondaryImagesBtn.click(function (event) {
        event.preventDefault();
        loadImages('dog'); // Imposta la query desiderata per le immagini secondarie (es. 'dog')
    });

    // Gestisci il clic sul pulsante "Search Images"
    searchImagesBtn.click(function (event) {
        event.preventDefault();

        // Ottieni il valore dalla casella di ricerca
        const searchQuery = searchInput.val();

        // Effettua la ricerca di nuove immagini con il termine specificato
        loadImages(searchQuery);
    });

    // Aggiungi questa parte per gestire il clic sul pulsante "Hide"
    $('.card').on('click', '.btn-hide', function () {
        // Trova l'elemento della card padre e nascondilo
        $(this).closest('.card').hide();
    });

  // Aggiungi questa linea per mostrare il container delle immagini
  $("#imagesContainer").removeClass("d-none");

});
