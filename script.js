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

// ==============================
// Step 3: Helper function to update the total price on the page
// ==============================

/*
 Note to self:
 - This function changes the totalPrice when we add or remove an item.
 - amount will be positive when we add an item.
 - amount will be negative when we remove an item.
*/
const updateTotalPrice = (amount) => {
  console.log("updateTotalPrice called with amount:", amount);

  // Note to self: Change the value of totalPrice by adding the amount.
  totalPrice = totalPrice + amount;

  // Note to self: Make sure the number never goes below 0.
  if (totalPrice < 0) {
    totalPrice = 0;
  }

  // Note to self: Show the new total with 2 decimal places (like 10.50).
  totalPriceSpan.textContent = totalPrice.toFixed(2);

  console.log("New totalPrice value:", totalPrice);
};


// ==============================
// Step 4: Helper function to create a single cart item
// ==============================

/*
 Note to self:
 - This function builds one cart row in the list.
 - It takes a productName and productPriceNumber.
 - It makes a new <li>, adds text, adds a remove button, and puts it into the <ul>.
*/
const createCartItem = (productName, productPriceNumber) => {
  console.log("createCartItem called with:", productName, productPriceNumber);

  // Note to self: Make a new list item <li> to hold this cart row.
  const listItem = document.createElement("li");
  listItem.classList.add("cart-item");

  // Note to self: Store the price on the item so we can use it later when removing.
  listItem.dataset.price = productPriceNumber.toString();

  // Note to self: This div holds the text ( product name and price ).
  const infoDiv = document.createElement("div");
  infoDiv.classList.add("item-info");
  infoDiv.textContent = `${productName} - $${productPriceNumber.toFixed(2)}`;
  console.log("infoDiv created with text:", infoDiv.textContent);

  // Note to self: This button lets the user remove this item from the cart.
  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-button");
  removeButton.textContent = "Remove";

  // Note to self: When we click "Remove", this function will run.
  removeButton.addEventListener("click", () => {
    console.log("Remove button clicked for item:", productName);

    // Note to self: Read the price from the dataset on the listItem.
    const priceToRemove = parseFloat(listItem.dataset.price);
    console.log("priceToRemove from dataset:", priceToRemove);

    // Note to self: Subtract this price from the total.
    updateTotalPrice(-priceToRemove);

    // Note to self: Remove this item from the list visually.
    listItem.remove();

    console.log("Item removed from cart:", productName);
  });

  // Note to self: Put the infoDiv and removeButton inside the listItem.
  listItem.appendChild(infoDiv);
  listItem.appendChild(removeButton);

  // Note to self: Finally, add the listItem to the <ul> cartList.
  cartList.appendChild(listItem);

  console.log("Cart item added to the DOM:", listItem);
};
// ==============================
// Step 5: Main function to handle adding a product when button is clicked
// ==============================

/*
 Note to self:
 - This function reads what the user typed in the inputs.
 - It checks if the inputs are valid (not empty, price is a real number).
 - If valid, it creates a new cart item and updates the total price.
*/
const handleAddProduct = () => {
  console.log("handleAddProduct fired");

  // Note to self: Read the name and price from the inputs.
  const rawName = productNameInput.value;
  const rawPrice = productPriceInput.value;

  console.log("Raw input values:", { rawName, rawPrice });

  // Note to self: Trim spaces off the name (remove extra spaces at the start/end).
  const cleanedName = rawName.trim();

  // Note to self: Turn the price string into a number.
  const priceNumber = parseFloat(rawPrice);

  console.log("Cleaned name and priceNumber:", cleanedName, priceNumber);

  // Note to self: Check for invalid name.
  if (cleanedName === "") {
    alert("Please enter a product name.");
    console.log("Add product stopped: name was empty.");
    return;
  }

  // Note to self: Check for invalid price (NaN means Not a Number).
  if (isNaN(priceNumber) || priceNumber <= 0) {
    alert("Please enter a valid price greater than 0.");
    console.log("Add product stopped: price was invalid.");
    return;
  }

  // Note to self: At this point, we have a valid name and valid price.
  // - Build the cart item
  createCartItem(cleanedName, priceNumber);

  // - Update the total price by adding this new item's price.
  updateTotalPrice(priceNumber);

  // Note to self: Clear the inputs so the user can type a new item.
  productNameInput.value = "";
  productPriceInput.value = "";

  console.log("Product added successfully and inputs cleared.");
};
