document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('productForm');
    const submitBtn = document.getElementById('submitBtn');
    const cancelBtn = document.getElementById('cancelBtn');
    const productList = document.getElementById('productList');

    let editingProductId = null;

    fetchProducts();

    productForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: getValue('productName'),
            brand: getValue('productBrand'),
            imageUrl: getValue('productImage'),
            price: parseFloat(getValue('productPrice')),
        };

        try {
            if (editingProductId) {
                await editProduct(editingProductId, formData);
            } else {
                await addProduct(formData);
            }

            resetForm();
        } catch (error) {
            console.error('Error:', error);
        }
    });

    function getValue(elementId) {
        const element = document.getElementById(elementId);
        return element ? element.value : '';
    }

    async function fetchProducts() {
        try {
            const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkyZmMwNTgzNTAwMTg1MjJjOTYiLCJpYXQiOjE3MDIzNjk1ODMsImV4cCI6MTcwMzU3OTE4M30.wnxVz5mS_gIqm9e9WVNgbtt41pjsjevDBP2w1S74CbY";
            const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            });

            const products = await response.json();
            console.log('Products:', products);

            displayProducts(products);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function displayProducts(products) {
        productList.innerHTML = '';

        products.forEach((product) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${product.name}</strong> - ${product.brand} - ${product.price}€ 
                <img src="${product.imageUrl}" alt="${product.name}" width="100">
                <button onclick="editProductForm('${product._id}')">Edit</button> 
                <button onclick="deleteProduct('${product._id}')">Delete</button>
                <a href="product-details.html?productId=${product._id}">Scopri di più</a>`;
            productList.appendChild(listItem);
        });

        console.log('Products displayed:', products);
    }

    async function addProduct(formData) {
        try {
            const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkyZmMwNTgzNTAwMTg1MjJjOTYiLCJpYXQiOjE3MDIzNjk1ODMsImV4cCI6MTcwMzU3OTE4M30.wnxVz5mS_gIqm9e9WVNgbtt41pjsjevDBP2w1S74CbY";
            const response = await fetch('https://striveschool-api.herokuapp.com/api/product/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
                body: JSON.stringify({
                    name: formData.name,
                    brand: formData.brand,
                    price: formData.price,
                    description: 'Product description', // Inserisci una descrizione valida
                    imageUrl: 'https://example.com/image.jpg', // Inserisci un URL di immagine valido
                }),
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Error adding product: ${errorText}`);
            }
    
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
            throw error;
        }
    }
    
    async function editProduct(productId, formData) {
        try {
            const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkyZmMwNTgzNTAwMTg1MjJjOTYiLCJpYXQiOjE3MDIzNjk1ODMsImV4cCI6MTcwMzU3OTE4M30.wnxVz5mS_gIqm9e9WVNgbtt41pjsjevDBP2w1S74CbY";
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`,
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error editing product: ${response.statusText}`);
            }

            fetchProducts();
        } catch (error) {
            console.error('Error editing product:', error);
            throw error;
        }
    }

    window.deleteProduct = async function (productId) {
        try {
            const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc4MTkyZmMwNTgzNTAwMTg1MjJjOTYiLCJpYXQiOjE3MDIzNjk1ODMsImV4cCI6MTcwMzU3OTE4M30.wnxVz5mS_gIqm9e9WVNgbtt41pjsjevDBP2w1S74CbY";
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${authToken}`,
                },
            });

            if (!response.ok) {
                throw new Error(`Error deleting product: ${response.statusText}`);
            }

            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            throw error;
        }
    };

    window.editProductForm = function (productId) {
        // Redirect to the edit-product page with the product ID as a query parameter
        window.location.href = `edit-product.html?productId=${productId}`;
    };

    cancelBtn.addEventListener('click', () => {
        resetForm();
    });

    
});

function closeProductDetailsModal() {
    const productDetailsModal = document.getElementById('productDetailsModal');
    productDetailsModal.style.display = 'none';
}

async function fetchProductDetails(productId) {
    try {
        const authToken = "IlTuoToken";
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

function resetForm() {
    const productForm = document.getElementById('productForm');
    const cancelBtn = document.getElementById('cancelBtn');

    // Resetta i campi del modulo
    productForm.reset();

    // Imposta manualmente il campo del prezzo a vuoto
    document.getElementById('productPrice').value = '';

    editingProductId = null;
    cancelBtn.style.display = 'none';
    submitBtn.innerText = 'Add Product';
}