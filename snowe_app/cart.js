function display() {
    const cart = JSON.parse(localStorage.getItem("cartItem")) || [];
    let container = document.getElementById("cart_container");

    if (cart.length === 0) {
        container.innerHTML = "<p>Your Cart is empty.</p>";
        return;
    }

    container.innerHTML = cart.map(item => {
        return `
            <div class="cart-item">
                <img class="cart-item-image" src="${item.image}" alt="${item.product_name}">
                <h5>${item.product_name}</h5>
                <p>${item.price}</p>
            </div>
        `;
    }).join("");
}

window.onload = display;
