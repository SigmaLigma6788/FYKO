let cart = JSON.parse(localStorage.getItem("cart")) || [];

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) {
    count.innerText = cart.length;
  }
}

function addToCart(name, price) {
  cart.push({
    name: name,
    price: price
  });

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartCount();

  alert(name + " wurde zum Warenkorb hinzugefügt.");
}

updateCartCount();
