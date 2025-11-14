// Lab 1 Dynamic Content Creation script (by-TN)
// Note to self: This file makes the shopping cart work using JavaScript and the DOM.

// ==============================
// Step 1: Get important elements from the page
// ==============================

// Note to self: This gets the text box where the user types the product name.
const productNameInput = document.getElementById("product-name");
console.log("productNameInput is ready:", productNameInput);
// NOTE: After testing this line, you can commit: 
// git add script.js
// git commit -m "Step 3 – grabbed productNameInput element"

// Note to self: This gets the number input where the user types the product price.
const productPriceInput = document.getElementById("product-price");
console.log("productPriceInput is ready:", productPriceInput);
// NOTE: Possible commit:
// git commit -am "Step 4 – grabbed productPriceInput element"

// Note to self: This gets the button that the user clicks to add a product to the cart.
const addProductButton = document.getElementById("add-product");
console.log("addProductButton is ready:", addProductButton);

// Note to self: This gets the <ul> that will hold all of the cart items.
const cartList = document.getElementById("cart");
console.log("cartList (ul) is ready:", cartList);

// Note to self: This gets the span where we will show the total price.
const totalPriceSpan = document.getElementById("total-price");
console.log("totalPriceSpan is ready:", totalPriceSpan);

// ==============================
// Step 2: Keep track of the total price
// ==============================

// Note to self: This variable starts at 0 and will hold the total price of all items.
let totalPrice = 0;
console.log("Starting totalPrice:", totalPrice);
// NOTE: You can commit after setting up the main variables:
// git commit -am "Step 5 – set up DOM references and totalPrice state"
