import { getCartProductFromLS } from "./getCartProducts";

let cartProducts = getCartProductFromLS();
export const removeProductFromCart = (id) => {
  // console.log("Before removal:", cartProducts);
  cartProducts = cartProducts.filter(
    (curProd) => Number(curProd.id) !== Number(id)
  );
  // console.log("After removal:", cartProducts);
  // Update the localStorage after removing  console.log("After removal:", cartProducts);ng the item
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
  // console.log(
  //   "Local storage after update:",
  //   JSON.parse(localStorage.getItem("cartProductLS"))
  // );
  // console.log("this the product id ", id);

  const removeRow = document.querySelector(`#card${id}`);
  // console.log("this id added while adding it to cart", removeRow);
  if (removeRow) {
    localStorage.removeItem(removeRow);
    removeRow.remove();
  }
  // console.log('this is removing prodcut is working ')
};
// Deleting the side Cart Products
export const sideCart = (id) => {
  const removeSideCartItems = document.querySelector(`.list${id}`);
  if (removeSideCartItems) {
    const cartProducts = getCartProductFromLS().filter(
      (product) => product.id !== id
    );
    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
    removeSideCartItems.remove();
  }
};
// console.log("is it even working wor no ");
