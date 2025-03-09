import { getCartProductFromLS } from "./getCartProducts";

export const fetchQuantityFromLS = (id, price, perProductPrice) => {
  let cartProducts = getCartProductFromLS();

  let existingProduct = cartProducts.find((currProd) => currProd.id === id);
  let quantity = 1;
  // check product exist or not
  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
    perProductPrice = existingProduct.PerProductPrice;
    // console.log(perProductPrice)
  }
  return { quantity, price, perProductPrice };
};
