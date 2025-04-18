import { getCartProductFromLS } from "./getCartProducts";


const print1 = getCartProductFromLS();
const totalPriceofAllProduct = document.querySelectorAll(".totalPrice");

const SumofProducts = print1.map((getQuantityPrice) => {
  return getQuantityPrice.price * getQuantityPrice.quantity;
});
let FinalPaybleAmount = SumofProducts.reduce(
  (acc, addition) => acc + addition,
  0
);

totalPriceofAllProduct.forEach((totalProductinnerText) => {
  totalProductinnerText.innerText =
    `\u20B9` + parseFloat(FinalPaybleAmount).toFixed(2);
});