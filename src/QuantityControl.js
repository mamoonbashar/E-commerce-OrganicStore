import { getCartProductFromLS } from "./getCartProducts";
import products from "../api.json" assert { type: "json" };
import { fetchQuantityFromLS } from "./fetchQuantityFromLS";
import { SumOfAll } from "./totalPerProductPrice";

export const updateLocalStorage = (id, updatedQuantity, updatedPrices) => {
  let cartData = getCartProductFromLS();
  const productToUpdate = cartData.find((product) => product.id === id);

  if (productToUpdate) {
    productToUpdate.quantity = updatedQuantity;

    // productToUpdate.price = parseFloat(
    //   (updatedQuantity * updatedPrices).toFixed(2)
    // );
    const totalProductPrice = document.querySelector(
      `#NewTotalProductPrice${id}`
    );

    const priceText = totalProductPrice.innerText.replace(`\u20B9`, "");
    const priceValue = parseFloat(priceText);
    if (!isNaN(priceValue)) {
      productToUpdate.PerProductPrice = priceValue;
    }

    localStorage.setItem("cartProductLS", JSON.stringify(cartData));
  }
};

export const increamentQuantity = (id, event, priceofThis, showTotal) => {
  //Find the correct product row
  const tableData = document.querySelector(`#ProductList${id}`);

const smallScreen = document.querySelector(`#SmallScreenProduct${id}`);
console.log(smallScreen) 
if (!tableData) return; // Exit if product row is not found

  // Find the input field for quantity
  const quantityInput = tableData.querySelector(".ShowQuantity");
  const smallScreenQuantity= smallScreen.querySelector(".ShowQuantity");

  if (!quantityInput && !smallScreenQuantity) return; // Exit if quantity input is not found

  let currentQuantity =   parseInt(smallScreenQuantity.value) || parseInt(quantityInput.value) || 1;

  //Check if the clicked button is the increment button
  if (event.target.closest("#increaseQuantity")) {
    currentQuantity += 1; // Increase quantity
    quantityInput.value = currentQuantity; // Update the UI
    smallScreenQuantity.value=currentQuantity
  }
  if (event.target.closest("#decreaseQuantity")) {
    if (currentQuantity > 1) {
      currentQuantity -= 1; // Increase quantity
      quantityInput.value = currentQuantity; // Update the UI
       smallScreenQuantity.value = currentQuantity;
    } else {
      return;
    }
  }

  const accessValue = document.querySelector(`#NewTotalProductPrice${id}`);
  const SmallCloneValue = document.querySelector(
    `#SmallNewTotalProductPrice${id}`
  );

  const getTotalPerProductPrice = document.querySelector(".totalProductPrice");

  let priceinputValue = document.querySelectorAll(`#ProductList${id}`);
  // PER PRODUCT PRICE cALCULATIONS
  let totalPrice = quantityInput.value * priceofThis;

  totalPrice = parseFloat(totalPrice.toFixed(2));

  accessValue.innerText = `\u20B9` + totalPrice;
  SmallCloneValue.innerText = `\u20B9` + totalPrice;

  updateLocalStorage(id, currentQuantity, totalPrice);
  // After updating Storage values

  // Store Per Product Price

  SumOfAll();
};
