document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.getElementById("cartBtn");
  const closeBtn = document.getElementById("closeCart");
  const overlay = document.getElementById("cartOverlay");

  cartBtn.addEventListener("click", () => {
    document.body.classList.add("cart-open");
  });

  closeBtn.addEventListener("click", closeCart);
  overlay.addEventListener("click", closeCart);

  function closeCart() {
    document.body.classList.remove("cart-open");
  }
});
