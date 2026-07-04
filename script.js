let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart() {
    const product = {
        name: "FYKO T-Shirt",
        price: 23
    };

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Produkt wurde zum Warenkorb hinzugefügt!");
}
