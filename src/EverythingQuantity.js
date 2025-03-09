export const increamentQuantity = (event, id) => {
  // Find the correct product row

  const quantityInput = document.querySelector(".ShowQuantity");

  if (!quantityInput) return; // Exit if quantity input is not found

  let currentQuantity = parseInt(quantityInput.value) || 1;

  // Check if the clicked button is the increment button

  //   if (event.target.closest("#increaseQuantity")) {
  //     currentQuantity += 1; // Increase quantity
  //     quantityInput.value = currentQuantity; // Update the UI
  // console.log("its working" ,id)
  // }

  const currentElement = document.querySelector(`#card${id}`);
  let proudctQuantity = currentElement.querySelector(".ShowQuantity");
  let quantity = parseInt(proudctQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "QuantityBtn increament") {
    quantity += 1;
    // console.log("i aded this by myself", quantity);
    // console.log("this is class", event.target.className);
    // console.log(quantity)
  }
  if (event.target.className === "QuantityBtn  decreament") {
    quantity -= 1;
  }
  if (quantity <= 0) {
    return 0;
  }
  proudctQuantity.value = quantity;
  // console.log('you got the quantity',quantity)
  proudctQuantity.setAttribute("data-quantity", quantity);
  return quantity;
};
