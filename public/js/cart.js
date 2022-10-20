// <!-- Function for the NavBar ShoppingCart -->
function seeCart() {
  $("#modalCart").modal("show");
}
function hideCart() {
  $("#modalCart").modal("hide");
}

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Remove Button Fx
function ready() {
  var removeCartItemButtons = document.getElementsByClassName("btn-danger");
  for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i];
    button.addEventListener("click", removeCartItem);
  }

  function removeCartItem(event) {
    event.stopPropagation();
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
  }

  // Control of the input value.
  var quantityInputs = document.getElementsByClassName("cart-quantity-input");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  // Limit the number od quantity value.
  function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
      input.value = 1;
    }
    updateCartTotal();
  }

  // Add items to the shopping cart.
  var addToCartButtons = document.getElementsByClassName("shop-item-button");
  for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i];
    button.addEventListener("click", addToCartClicked);
  }

  function addToCartClicked(event) {
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    // NOTE: Here we need to put the 'dishName' element.
    var title = shopItem.getElementsByClassName("dishName")[0].innerText;
    // NOTE: Here we need to put the 'dishPrice' element.
    var price = shopItem.getElementsByClassName("dishPrice")[0].innerText;
    // NOTE: Here we need to put the 'dishImg' element.
    var imageSrc = shopItem.getElementsByClassName("dishImage")[0].src;
    addItemToCart(title, price, imageSrc);
    updateCartTotal();
  }

  // Create the cart row for items added, Name, Price and Image of the element.
  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement("div");
    cartRow.classList.add("cart-row");
    var cartItems = document.getElementsByClassName("cart-items")[0];
    var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
    for (var i = 0; i < cartItemNames.length; i++) {
      if (cartItemNames[i].innerText == title) {
        alert("This item is already added to the cart!");
        return;
      }
    }
    var cartRowContents = `
                <div class="cart-item cart-column">
                    <img class="card card-img-top cart-item-image" src="${imageSrc}" width="100" height="100">
                    <span class="cart-item-title">${title}</span>
                </div>
                <span class="cart-price cart-column">${price}</span>
                <div class="cart-quantity cart-column">
                    <input class="cart-quantity-input" type="number" value="1">
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>`;
    cartRow.innerHTML = cartRowContents;
    // Making the remove cart button and quantity get reloaded everytime theres a change.
    cartItems.append(cartRow);
    cartRow
      .getElementsByClassName("btn-danger")[0]
      .addEventListener("click", removeCartItem);
    cartRow
      .getElementsByClassName("cart-quantity-input")[0]
      .addEventListener("change", quantityChanged);
  }

  //   Adding the fx for the Purchase button, and setting an Alert for any purchase made.
  document
    .getElementsByClassName("btn-purchase")[0]
    .addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
  alert("Thank you for your purchase");
  var cartItems = document.getElementsByClassName("cart-items")[0];
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild);
  }
  updateCartTotal();
}

// Update Cart Fx thas needs to be used for every row created.
function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName("cart-price")[0];
    var quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }

  //   Round the Total.
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
