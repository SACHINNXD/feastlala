const cartBtn = document.getElementById("cartBtn");
const closeCart = document.getElementById("closeCart");
const overlay = document.getElementById("cartOverlay");

function openCart() {
  document.body.classList.add("cart-open");
}

function closeCartDrawer() {
  document.body.classList.remove("cart-open");
}

cartBtn.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
overlay.addEventListener("click", closeCartDrawer);

/*
  FUTURE-READY SYNC:
  - Keep cart state in a global object or store
  - Add-to-cart buttons will push items
  - Drawer auto-updates via DOM render function
*/
