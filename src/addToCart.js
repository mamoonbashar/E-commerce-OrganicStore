import { getCartProductFromLS } from "./getCartProducts";

export const addToCart = (id, Quantity) => {
  let arrLocalStorageProduct = getCartProductFromLS();
  const currentProductElem = document.querySelector(`.card${id}`);

  let price = Number(currentProductElem.querySelector(".price").innerText);
  let name = currentProductElem.querySelector(".name").innerText;
  let description = currentProductElem.querySelector(".description").innerText;
  let imageUrl = currentProductElem.querySelector(".imageUrl").src;
  let quantity = Number(
    currentProductElem.querySelector(".ShowQuantity").value
  );

  arrLocalStorageProduct.push({
    id,
    quantity,
    price,
    name,
    description,
    imageUrl,
  });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
};
