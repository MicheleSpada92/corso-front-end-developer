document.addEventListener('DOMContentLoaded', () => {
    const productNameElement = document.getElementById('productName');
    const productDescriptionElement = document.getElementById('productDescription');
    const productBrandElement = document.getElementById('productBrand');
    const productPriceElement = document.getElementById('productPrice');
    const productImageElement = document.getElementById('productImage');

    // Ottieni il parametro productId dalla query string
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('productId');

    // Ottieni i dettagli del prodotto dalle API
    fetchProductDetails(productId)
        .then((productDetails) => {
            // Aggiorna il contenuto della pagina di dettaglio con i dettagli del prodotto
            productNameElement.innerText = productDetails.name;
            productDescriptionElement.innerText = productDetails.description;
            productBrandElement.innerText = `Brand: ${productDetails.brand}`;
            productPriceElement.innerText = `Price: ${productDetails.price}€`;
            productImageElement.src = productDetails.imageUrl;
        })
        .catch((error) => {
            console.error('Error fetching product details:', error);
        });
});

function closeProductDetailsModal() {
    // Chiudi la finestra modale o naviga alla homepage
    window.location.href = 'products.html';
}

// Dichiarazione della funzione fetchProductDetails
async function fetchProductDetails(productId) {
    try {
        // Codice per ottenere i dettagli del prodotto
        const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkyZmMwNTgzNTAwMTg1MjJjOTYiLCJpYXQiOjE3MDIzNjk1ODMsImV4cCI6MTcwMzU3OTE4M30.wnxVz5mS_gIqm9e9WVNgbtt41pjsjevDBP2w1S74CbY"; // Sostituisci con il tuo token
        const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });

        if (response.ok) {
            const productDetails = await response.json();
            console.log('Product Details:', productDetails);
            return productDetails;
        } else {
            throw new Error(`Error fetching product details: ${response.statusText}`);
        }
    } catch (error) {
        console.error('Error fetching product details:', error);
        throw error;
    }
}